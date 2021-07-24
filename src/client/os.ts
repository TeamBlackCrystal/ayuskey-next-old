import { Component, defineAsyncComponent, markRaw, reactive, Ref, ref } from 'vue';
import { EventEmitter } from 'eventemitter3';
import * as Sentry from '@sentry/browser';
import Stream from '@/scripts/stream';
import { apiUrl, debug } from '@/config';
import MkPostFormDialog from '@/components/post-form-dialog.vue';
import MkWaitingDialog from '@/components/waiting-dialog.vue';
import { resolve } from '@/router';
import { $i } from '@/account';
import { defaultStore } from '@/store';
import parseAcct from '../misc/acct/parse';

export const stream = markRaw(new Stream());

export const pendingApiRequestsCount = ref(0);
let apiRequestsCount = 0; // for debug
export const apiRequests = ref([]); // for debug

export const windows = new Map();

export function api(endpoint: string, data: Record<string, any> = {}, token?: string | null | undefined, lite?: boolean) {
	if (!lite) pendingApiRequestsCount.value++;

	const onFinally = () => {
		pendingApiRequestsCount.value--;
	};

	const log = !lite && debug ? reactive({
		id: ++apiRequestsCount,
		endpoint,
		req: markRaw(data),
		res: null,
		state: 'pending',
	}) : null;
	if (debug && !lite) {
		apiRequests.value.push(log);
		if (apiRequests.value.length > 128) apiRequests.value.shift();
	}

	const promise = new Promise((resolve, reject) => {
		// Append a credential
		if ($i) (data as any).i = $i.token;
		if (token !== undefined) (data as any).i = token;

		// Send request
		fetch(endpoint.indexOf('://') > -1 ? endpoint : `${apiUrl}/${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(data),
			credentials: 'omit',
			cache: 'no-cache'
		}).then(async (res) => {
			const body = res.status === 204 ? null : await res.json();

			if (res.status === 200) {
				resolve(body);
				if (debug) {
					log!.res = markRaw(body);
					log!.state = 'success';
				}
			} else if (res.status === 204) {
				resolve();
				if (debug) {
					log!.state = 'success';
				}
			} else {
				reject(body.error);
				if (debug) {
					log!.res = markRaw(body.error);
					log!.state = 'failed';
				}

				if (defaultStore.state.reportError && !_DEV_) {
					Sentry.withScope((scope) => {
						scope.setTag('api_endpoint', endpoint);
						scope.setContext('api params', data);
						scope.setContext('api error info', body.info);
						scope.setTag('api_error_id', body.id);
						scope.setTag('api_error_code', body.code);
						scope.setTag('api_error_kind', body.kind);
						scope.setLevel(Sentry.Severity.Error);
						Sentry.captureMessage('API error');
					});
				}
			}
		}).catch(reject);
	});

	promise.then(onFinally, onFinally);

	return promise;
}

export function apiWithDialog(
	endpoint: string,
	data: Record<string, any> = {},
	token?: string | null | undefined,
	onSuccess?: (res: any) => void,
	onFailure?: (e: Error) => void,
) {
	const promise = api(endpoint, data, token);
	promiseDialog(promise, onSuccess, onFailure ? onFailure : (e) => {
		dialog({
			type: 'error',
			text: e.message + '\n' + (e as any).id,
		});
	});

	return promise;
}

export function promiseDialog<T extends Promise<any>>(
	promise: T,
	onSuccess?: ((res: any) => void) | null,
	onFailure?: ((e: Error) => void) | null,
	text?: string,
): T {
	const showing = ref(true);
	const success = ref(false);

	promise.then(res => {
		if (onSuccess) {
			showing.value = false;
			onSuccess(res);
		} else {
			success.value = true;
			setTimeout(() => {
				showing.value = false;
			}, 1000);
		}
	}).catch(e => {
		showing.value = false;
		if (onFailure) {
			onFailure(e);
		} else {
			dialog({
				type: 'error',
				text: e
			});
		}
	});

	// NOTE: dynamic importすると挙動がおかしくなる(showingの変更が伝播しない)
	popup(MkWaitingDialog, {
		success: success,
		showing: showing,
		text: text,
	}, {}, 'closed');

	return promise;
}

function isModule(x: any): x is typeof import('*.vue') {
	return x.default != null;
}

let popupIdCount = 0;
export const popups = ref([]) as Ref<{
	id: any;
	component: any;
	props: Record<string, any>;
}[]>;

export async function popup(component: Component | typeof import('*.vue') | Promise<Component | typeof import('*.vue')>, props: Record<string, any>, events = {}, disposeEvent?: string) {
	if (component.then) component = await component;

	if (isModule(component)) component = component.default;
	markRaw(component);

	const id = ++popupIdCount;
	const dispose = () => {
		if (_DEV_) console.log('os:popup close', id, component, props, events);
		// このsetTimeoutが無いと挙動がおかしくなる(autocompleteが閉じなくなる)。Vueのバグ？
		setTimeout(() => {
			popups.value = popups.value.filter(popup => popup.id !== id);
		}, 0);
	};
	const state = {
		component,
		props,
		events: disposeEvent ? {
			...events,
			[disposeEvent]: dispose
		} : events,
		id,
	};

	if (_DEV_) console.log('os:popup open', id, component, props, events);
	popups.value.push(state);

	return {
		dispose,
	};
}

export function pageWindow(path: string) {
	const { component, props } = resolve(path);
	popup(import('@/components/page-window.vue'), {
		initialPath: path,
		initialComponent: markRaw(component),
		initialProps: props,
	}, {}, 'closed');
}

export function dialog(props: Record<string, any>) {
	return new Promise((resolve, reject) => {
		popup(import('@/components/dialog.vue'), props, {
			done: result => {
				resolve(result ? result : { canceled: true });
			},
		}, 'closed');
	});
}

export function success() {
	return new Promise((resolve, reject) => {
		const showing = ref(true);
		setTimeout(() => {
			showing.value = false;
		}, 1000);
		popup(import('@/components/waiting-dialog.vue'), {
			success: true,
			showing: showing
		}, {
			done: () => resolve(),
		}, 'closed');
	});
}

export function waiting() {
	return new Promise((resolve, reject) => {
		const showing = ref(true);
		popup(import('@/components/waiting-dialog.vue'), {
			success: false,
			showing: showing
		}, {
			done: () => resolve(),
		}, 'closed');
	});
}

export function form(title, form) {
	return new Promise((resolve, reject) => {
		popup(import('@/components/form-dialog.vue'), { title, form }, {
			done: result => {
				resolve(result);
			},
		}, 'closed');
	});
}

export async function selectUser() {
	return new Promise((resolve, reject) => {
		popup(import('@/components/user-select-dialog.vue'), {}, {
			ok: user => {
				resolve(user);
			},
		}, 'closed');
	});
}

export async function selectDriveFile(multiple: boolean) {
	return new Promise((resolve, reject) => {
		popup(import('@/components/drive-select-dialog.vue'), {
			type: 'file',
			multiple
		}, {
			done: files => {
				if (files) {
					resolve(multiple ? files : files[0]);
				}
			},
		}, 'closed');
	});
}

export async function selectDriveFolder(multiple: boolean) {
	return new Promise((resolve, reject) => {
		popup(import('@/components/drive-select-dialog.vue'), {
			type: 'folder',
			multiple
		}, {
			done: folders => {
				if (folders) {
					resolve(multiple ? folders : folders[0]);
				}
			},
		}, 'closed');
	});
}

export async function pickEmoji(src?: HTMLElement, opts) {
	return new Promise((resolve, reject) => {
		popup(import('@/components/emoji-picker.vue'), {
			src,
			...opts
		}, {
			done: emoji => {
				resolve(emoji);
			},
		}, 'closed');
	});
}

export function modalMenu(items: any[], src?: HTMLElement, options?: { align?: string; viaKeyboard?: boolean }) {
	return new Promise((resolve, reject) => {
		let dispose;
		popup(import('@/components/ui/modal-menu.vue'), {
			items,
			src,
			align: options?.align,
			viaKeyboard: options?.viaKeyboard
		}, {
			closed: () => {
				resolve();
				dispose();
			},
		}).then(res => {
			dispose = res.dispose;
		});
	});
}

export function contextMenu(items: any[], ev: MouseEvent) {
	ev.preventDefault();
	return new Promise((resolve, reject) => {
		let dispose;
		popup(import('@/components/ui/context-menu.vue'), {
			items,
			ev,
		}, {
			closed: () => {
				resolve();
				dispose();
			},
		}).then(res => {
			dispose = res.dispose;
		});
	});
}

export function post(props: Record<string, any>) {
	return new Promise((resolve, reject) => {
		// NOTE: MkPostFormDialogをdynamic importするとiOSでテキストエリアに自動フォーカスできない
		// NOTE: ただ、dynamic importしない場合、MkPostFormDialogインスタンスが使いまわされ、
		//       Vueが渡されたコンポーネントに内部的に__propsというプロパティを生やす影響で、
		//       複数のpost formを開いたときに場合によってはエラーになる
		//       もちろん複数のpost formを開けること自体Misskeyサイドのバグなのだが
		let dispose;
		popup(MkPostFormDialog, props, {
			closed: () => {
				resolve();
				dispose();
			},
		}).then(res => {
			dispose = res.dispose;
		});
	});
}

export const deckGlobalEvents = new EventEmitter();

export const uploads = ref([]);

export function upload(file: File, folder?: any, name?: string) {
	if (folder && typeof folder == 'object') folder = folder.id;

	return new Promise((resolve, reject) => {
		const id = Math.random();

		const reader = new FileReader();
		reader.onload = (e) => {
			const ctx = reactive({
				id: id,
				name: name || file.name || 'untitled',
				progressMax: undefined,
				progressValue: undefined,
				img: window.URL.createObjectURL(file)
			});

			uploads.value.push(ctx);

			const data = new FormData();
			data.append('i', $i.token);
			data.append('force', 'true');
			data.append('file', file);

			if (folder) data.append('folderId', folder);
			if (name) data.append('name', name);

			const xhr = new XMLHttpRequest();
			xhr.open('POST', apiUrl + '/drive/files/create', true);
			xhr.onload = (e: any) => {
				const driveFile = JSON.parse(e.target.response);

				resolve(driveFile);

				uploads.value = uploads.value.filter(x => x.id != id);
			};

			xhr.upload.onprogress = e => {
				if (e.lengthComputable) {
					ctx.progressMax = e.total;
					ctx.progressValue = e.loaded;
				}
			};

			xhr.send(data);
		};
		reader.readAsArrayBuffer(file);
	});
}

/*
export function checkExistence(fileData: ArrayBuffer): Promise<any> {
	return new Promise((resolve, reject) => {
		const data = new FormData();
		data.append('md5', getMD5(fileData));

		os.api('drive/files/find-by-hash', {
			md5: getMD5(fileData)
		}).then(resp => {
			resolve(resp.length > 0 ? resp[0] : null);
		});
	});
}*/

type Instance = {
	fetchedAt: number,
	instance: Record<string, any>
};

const instances: Record<string, Instance> = {};

export async function getInstance(host?: string): Promise<Instance | null> {
	if (!host) return null;
	const now = Date.now();
	// キャッシュが無いか、前回取得時から5分以上たっていれば取得してくる
	if (!instances[host] || now - instances[host].fetchedAt > 1000 * 60 * 5) {
		instances[host] = {
			fetchedAt: now,
			instance: await api('federation/show-instance', { host })
		};
	}
	return instances[host];
}

type Avatar = {
	fetchedAt: number,
	avatarUrl: string,
};

const avatars: Record<string, Avatar> = {};

export async function getAvatar(acct: string): Promise<string> { 
	const now = Date.now();
	// キャッシュが無いか、前回取得時から5分以上たっていれば取得してくる
	if (!avatars[acct] || now - avatars[acct].fetchedAt > 1000 * 60 * 5) {
		avatars[acct] = {
			avatarUrl: (await api('users/show', parseAcct(acct), undefined, true).catch(e => ({ avatarUrl: '' })) as any).avatarUrl,
			fetchedAt: now
		};
	}
	return avatars[acct].avatarUrl;
}
