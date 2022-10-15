import VButton from '../components/Button.vue';

export default {
  title: 'Design System/Button',
  component: VButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: {},
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'terciary', 'ghost', 'link'],
    },
  },
};

const Template = (args) => ({
  components: { VButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-button v-bind="args" />',
});

/** Primary Variant */
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

/** Secondary Variant */
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

/** Terciary Variant */
export const Terciary = Template.bind({});
Terciary.args = {
  variant: 'terciary',
  label: 'Button',
};

/** Ghost Variant */
export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  label: 'Button',
};

/** Link Variant */
export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  label: 'Simple Link',
};