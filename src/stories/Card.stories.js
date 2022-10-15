import VCard from '../components/Card.vue';
import VButton from '../components/Button.vue';

export default {
  title: 'Design System/Card',
  component: VCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'filled', 'outlined'],
    },
  },
};

const Template = (args) => ({
  components: { VCard, VButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <v-card v-bind="args">
    <div class="w-64 h-96 mx-auto p-8 flex items-end justify-center bg-transparent">
      <v-button variant="secondary" label="Default"></v-button>
    </div>
  </v-card>`,
});

/** Elevated Variant */
export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
};

export const ElevatedWithImage = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  template: `
    <v-card v-bind="args">
      <img src="./assets/images/sunset.jpg">
      <div class="w-64 h-96 mx-auto p-8 flex items-end justify-center bg-transparent">
        <v-button variant="secondary" label="Default"></v-button>
      </div>
    </v-card>
  `
};

/** Filled Variant */
export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

/** Outlined Variant */
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
