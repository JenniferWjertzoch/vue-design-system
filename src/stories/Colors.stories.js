import VColors from '../components/Colors.vue';

export default {
  title: 'Design System/Colors',
  component: VColors,
};

const Template = (args) => ({
  components: { VColors },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-colors />`,
});

/** Default Variant */
export const Default = Template.bind({});

