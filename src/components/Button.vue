import VIcon from '../components/Icon.vue';

<template>
  <button type="button" :class="classes" :disabled="disabled" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "v-button",

  props: {
    /** this will be your button text */
    label: {
      type: String,
      required: true,
    },
    /** disable or enable the button */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** change the look and feel of you button by passing a valid variant value */
    variant: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          ["primary", "secondary", "terciary", "ghost", "link"].indexOf(
            value.toLowerCase()
          ) !== -1
        );
      },
    },
  },

  /** emits a click function so that parent component can listen to this event and trigger an action */
  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    /** dynamic classes according to the props passed by the parent component */
    return {
      classes: computed(() => ({
        "rounded disabled:bg-disabled-gray disabled:text-gray-300 disabled:border-transparent":
          ["primary", "secondary", "terciary"].indexOf(
            props.variant.toLowerCase()
          ) !== -1,
        "bg-custom-black text-white active:bg-gray-500 hover:bg-white hover:border hover:border-custom-black hover:text-black":
          ["primary", "terciary"].indexOf(props.variant.toLowerCase()) !== -1,
        "bg-white text-black border border-custom-black active:border-transparent active:bg-gray-500 active:text-white hover:bg-black hover:text-white":
          ["secondary"].indexOf(props.variant.toLowerCase()) !== -1,
        "bg-transparent":
          ["link", "ghost"].indexOf(props.variant.toLowerCase()) !== -1,
        "text-black active:border active:border-black disabled:text-gray-300":
          ["ghost"].indexOf(props.variant.toLowerCase()) !== -1,
        "text-black underline disabled:text-custom-gray hover:text-gray-500":
          ["link"].indexOf(props.variant.toLowerCase()) !== -1,
        "py-3 px-16": ["primary"].indexOf(props.variant.toLowerCase()) !== -1,
        "py-2 px-12": ["secondary"].indexOf(props.variant.toLowerCase()) !== -1,
        "py-2 px-8": ["terciary"].indexOf(props.variant.toLowerCase()) !== -1,
        "py-4 px-8": ["ghost"].indexOf(props.variant.toLowerCase()) !== -1,
        "p-0 ": ["link"].indexOf(props.variant.toLowerCase()) !== -1,
      })),
      /** click handler */
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
