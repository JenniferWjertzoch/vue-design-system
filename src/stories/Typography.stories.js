import VTypography from '../components/Typography.vue';

export default {
  title: 'Design System/Typography',
  component: VTypography,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'tooltip','sm'],
    },
  },
};

const Template = (args) => ({
  components: { VTypography },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <v-typography v-bind="args">
    The quick brown fox jumps over the lazy dog
  </v-typography>`,
});

/** Heading 1 Variant */
export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

/** Heading 2 Variant */
export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

/** Heading 3 Variant */
export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
};

/** Heading 4 Variant */
export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
};

/** Heading 5 Variant */
export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
};

/** Paragraph Variant */
export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
};

/** Tooltip Variant */
export const Tooltip = Template.bind({});
Tooltip.args = {
  variant: 'tooltip',
};

/** Small Variant */
export const Small = Template.bind({});
Small.args = {
  variant: 'sm',
};