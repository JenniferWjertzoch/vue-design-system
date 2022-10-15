<template>
  <component :is="tagName" :class="classes">
    <slot></slot>
  </component>
</template>
  
<script>
import { reactive, computed } from 'vue';

export default {
  name: 'v-button',

  props: {
    /** possible tags or variants of typography component */
    variant: {
      type: String,
      default: 'h1',
      validator: function (value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'tooltip','sm'].indexOf(value.toLowerCase()) !== -1;
      },
    }
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {
      /** tailwind typography classes added according to the prop value */
      classes: computed(() => ({
        'text-5xl': ['h1'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-4xl': ['h2'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-2xl': ['h3'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-xl': ['h4'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-base': ['p'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-sm': ['tooltip'].indexOf(props.variant.toLowerCase()) !== -1,
        'text-xs': ['h5', 'sm'].indexOf(props.variant.toLowerCase()) !== -1,
      })),
      /** Tagname [h1, h2, ...] created according to the prop passed */
      tagName: computed(() => {
        switch(props.variant) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'p':
            return props.variant;

          case 'tooltip':
          case 'sm':
            return 'span';
        }
      }),
    }
  },
}
</script>
  
  