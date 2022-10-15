<template>
  <!-- font awesome icon list -->
  <font-awesome-icon :icon="[type, name]" />
</template>
  
<script>
export default {
  name: 'v-icon',

  props: {
    /** type of the icons, search for available types: https://fontawesome.com/icons */
    type: {
      type: String,
      default: 'fa-solid',
    },
    /** name of the icons, search for available list: https://fontawesome.com/icons */
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
  