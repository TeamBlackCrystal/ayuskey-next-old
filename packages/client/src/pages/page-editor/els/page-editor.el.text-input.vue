<template>
<XContainer @remove="() => $emit('remove')" :draggable="true">
	<template #header><i class="fas fa-bolt"></i> {{ $ts._pages.blocks.textInput }}</template>

	<section style="padding: 0 16px 0 16px;">
		<MkInput v-model="value.name"><template #prefix><i class="fas fa-magic"></i></template><template #label>{{ $ts._pages.blocks._textInput.name }}</template></MkInput>
		<MkInput v-model="value.text"><template #label>{{ $ts._pages.blocks._textInput.text }}</template></MkInput>
		<MkInput v-model="value.default" type="text"><template #label>{{ $ts._pages.blocks._textInput.default }}</template></MkInput>
	</section>
</XContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import XContainer from '../page-editor.container.vue';
import MkInput from '@/components/form/input.vue';
import * as os from '@/os';

export default defineComponent({
	components: {
		XContainer, MkInput
	},

	props: {
		value: {
			required: true
		},
	},

	data() {
		return {
		};
	},

	created() {
		if (this.value.name == null) this.value.name = '';
	},
});
</script>
