import VIcon from '../components/Icon.vue';

export default {
  title: 'Design System/Icons',
  component: VIcon,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    list: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { VIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const icons = args.list.split(',')
      .map(i => {
        const brands = [
          'twitter',
          'facebook',
          'instagram'
        ];
        const isBrand = brands.some(b => i.toLowerCase().trim().indexOf(b) !== -1)
        console.log('brands', isBrand, brands, i.toLowerCase())
        return {
          name: `fa-${i.trim()}`,
          type: isBrand ? 'fa-brands' : 'fa-solid'
        }
      })
      
    return { icons };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="flex gap-3">
      <v-icon v-for="icon in icons" :name="icon.name" :type="icon.type" />
    </div>
  `,
});

/** Default Variant */
export const Default = Template.bind({});
Default.args = {
  list: [
    'circle-check',
    'circle-xmark',
    'circle-info',
    'chevron-left',
    'chevron-right',
    'chevron-down',
    'chevron-up',
    'spinner',
    'up-right-and-down-left-from-center',
    'minus',
    'plus',
    'arrow-right',
    'arrow-left',
    'arrow-down',
    'arrow-up',
    'arrow-trend-up',
    'arrow-trend-down',
    'check',
    'xmark',
    'calendar',
    'twitter',
    'square-facebook',
    'instagram',
    'magnifying-glass'
  ].join(', '), 
}
