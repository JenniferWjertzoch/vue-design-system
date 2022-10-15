<template>
  <div :class="classes">
    <img class="w-full" :src="imageSrc" v-if="imageSrc" :alt="imageTitle" />
    <div class="px-6 py-4">
      <div
        class="font-bold text-xl mb-2"
        v-if="cardTitle"
        v-text="cardTitle"
      ></div>
      <p
        class="text-gray-700 text-base"
        v-if="cardDescription"
        v-text="cardDescription"
      ></p>
    </div>
    <div class="px-6 pt-4 pb-2" v-if="cardHelpText">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        v-text="cardHelpText"
      ></span>
    </div>
    <!-- this will be used if you wanted to a pass custom html to card component -->
    <slot></slot>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "v-button",

  props: {
    /** source of the image that you want to dispay inside the card */
    imageSrc: {
      type: String,
    },
    /** image title/alt text */
    imageTitle: {
      type: String,
    },
    /** title to be displayed on top of the card */
    cardTitle: {
      type: String,
      required: true,
    },
    /** description text, will be displayed in a paragraph */
    cardDescription: {
      type: String,
    },
    /** small help text will be displayed at the bottom of the page */
    cardHelpText: {
      type: String,
    },
    /** variants of the card */
    variant: {
      type: String,
      default: "elevated",
      validator: function (value) {
        return (
          ["elevated", "filled", "outlined"].indexOf(value.toLowerCase()) !== -1
        );
      },
    },
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "max-w-sm rounded overflow-hidden": true,
        "bg-transparent border border-gray-300":
          ["elevated"].indexOf(props.variant.toLowerCase()) !== -1,
        "bg-gray-600": ["filled"].indexOf(props.variant.toLowerCase()) !== -1,
        "bg-white border-2 border-black":
          ["outlined"].indexOf(props.variant.toLowerCase()) !== -1,
      })),
    };
  },
};
</script>
