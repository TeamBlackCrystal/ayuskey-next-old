<template>
<XContainer @remove="() => $emit('remove')" :draggable="true">
	<template #header><i class="fas fa-sticky-note"></i> {{ value.title }}</template>
	<template #func>
		<button @click="rename()" class="_button">
			<i class="fas fa-pencil-alt"></i>
		</button>
		<button @click="add()" class="_button">
			<i class="fas fa-plus"></i>
		</button>
	</template>

	<section class="ilrvjyvi">
		<XBlocks class="children" v-model="value.children" :hpml="hpml"/>
	</section>
</XContainer>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { v4 as uuid } from 'uuid';
import XContainer from '../page-editor.container.vue';
import * as os from '@/os';

export default defineComponent({
	components: {
		XContainer,
		XBlocks: defineAsyncComponent(() => import('../page-editor.blocks.vue')),
	},

	inject: ['getPageBlockList'],

	props: {
		value: {
			required: true
		},
		hpml: {
			required: true,
		},
	},

	data() {
		return {
		};
	},

	created() {
		if (this.value.title == null) this.value.title = null;
		if (this.value.children == null) this.value.children = [];
	},

	mounted() {
		if (this.value.title == null) {
			this.rename();
		}
	},

	methods: {
		async rename() {
			const { canceled, result: title } = await os.dialog({
				title: 'Enter title',
				input: {
					type: 'text',
					default: this.value.title
				},
				showCancelButton: true
			});
			if (canceled) return;
			this.value.title = title;
		},

		async add() {
			const { canceled, result: type } = await os.dialog({
				type: null,
				title: this.$ts._pages.chooseBlock,
				select: {
					groupedItems: this.getPageBlockList()
				},
				showCancelButton: true
			});
			if (canceled) return;

			const id = uuid();
			this.value.children.push({ id, type });
		},
	}
});
</script>

<style lang="scss" scoped>
.ilrvjyvi {
	> .children {
		padding: 16px;
	}
}
</style>
