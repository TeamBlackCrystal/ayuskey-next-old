<template>
<form class="eppvobhk" :class="{ signing }" @submit.prevent="onSubmit">
	<div class="auth _section">
		<MkButton type="submit" primary :disabled="signing" style="margin: 0 auto;">{{ signing ? $ts.loggingIn : $ts.login }}</MkButton>
	</div>
</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { faLock, faGavel } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import MkButton from './ui/button.vue';
import MkInput from './ui/input.vue';
import { instanceHost } from '@/config';
import * as os from '@/os';

export default defineComponent({
	components: {
		MkButton,
		MkInput,
	},

	props: {
		withAvatar: {
			type: Boolean,
			required: false,
			default: true
		},
		autoSet: {
			type: Boolean,
			required: false,
			default: false,
		}
	},

	emits: ['login'],

	data() {
		return {
			signing: false,
			faLock, faGavel, faTwitter, faDiscord, faGithub
		};
	},

	methods: {
		async onSubmit() {
			this.signing = true;
		  try {
				const res: {secret: string, id: string} = await os.api("app/create", {
					name: "Misskey v12FE",
					description: "Misskey v12のフロントだけ切り出したやつ",
					permission: [
						'read:account',
						'write:account',
						'read:blocks',
						'write:blocks',
						'read:drive',
						'write:drive',
						'read:favorites',
						'write:favorites',
						'read:following',
						'write:following',
						'read:messaging',
						'write:messaging',
						'read:mutes',
						'write:mutes',
						'write:notes',
						'read:notifications',
						'write:notifications',
						'read:reactions',
						'write:reactions',
						'write:votes',
						'read:pages',
						'write:pages',
						'write:page-likes',
						'read:page-likes',
						'read:user-groups',
						'write:user-groups',
						'read:channels',
	          'write:channels',
						'read:registry',
						'write:registry',
					],
					callbackUrl: `${location.origin}/callback.html#domain=${instanceHost}`
				})
				localStorage.setItem(`appSecret:${instanceHost}`, res.secret)
				const session = await os.api("auth/session/generate", {
					appSecret: res.secret,
				})
				location.href = session.url
			} catch(e) {
				os.dialog({
					type: 'error',
					text: `${e}`
				});
			} finally {
				this.signing = false;
			}
		}
	}
});
</script>

<style lang="scss" scoped>
.eppvobhk {
	> .auth {
		> .avatar {
			margin: 0 auto 0 auto;
			width: 64px;
			height: 64px;
			background: #ddd;
			background-position: center;
			background-size: cover;
			border-radius: 100%;
		}
	}
}
</style>
