<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
	name: 'v-grid-row',

	props: {
		/** number of columns required for the row */
    cols: {
      type: Number,
      default: 1,
    },
		/** specify gap between the columns */
		gap: {
      type: Number,
    },
	},

	setup(props) {
		props = reactive(props);
		return {
			/** tailwind grid classes added according to prop value */
			classes: computed(() => ({
				'grid': true,
				[`grid-cols-${props.cols}`]: true,
				[`gap-${props.gap}`]: !!props.gap
			})),
		}
	},
}
</script>
