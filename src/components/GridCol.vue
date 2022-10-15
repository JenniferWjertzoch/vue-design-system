<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
	name: 'v-grid-col',

	props: {
		/** it behaves like an offset, grid from where you want to start the column */
		start: {
			type: Number,
			default: 1,
		},
		/** it behaves like col size, it will aquire the number of grids passed in this prop */
		span: {
			type: Number,
			required: 12,
		},
	},

	setup(props) {
		props = reactive(props);
		return {
			/** tailwind grid classes, it will be added according to the prop value */
			classes: computed(() => ({
				[`col-start-${props.start}`]: true,
				[`col-span-${props.span}`]: true
			})),
		}
	},
}
</script>
