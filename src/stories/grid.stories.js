import VGridRow from '../components/GridRow.vue';
import VGridCol from '../components/GridCol.vue';
import VTypography from '../components/Typography.vue';

export default {
  title: 'Design System/Grid',
};

const Template = (args) => ({
  components: { VGridRow, VGridCol, VTypography },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <v-grid-row :cols="1" class="mb-8">
      <v-typography class="mb-8" variant="h2">
        Column layout and text
      </v-typography>
      <v-typography class="mb-6" variant="p">
        Layouts in our products are generally in an eight or 12
        column configuration.
        The simplest layout is a centered, single block
        that spans eight columns. Alternatively,
        the layout can be extended to use the remaining
        four columns if there is a need for primary and
        secondary information.
      </v-typography>
      <v-typography class="mb-8" variant="p">
        Using the default font size value in the Atlassian
        type stack, we can optimize the max width of paragraphs
        for a comfortable reading experience. There's an
        overall maximum width set in the layout to ensure that
        the line length of text does not exceed a readable
        measure of 100 characters per line. At 14px, the
        recommended line length falls at eight columns.
        With the exception of code, text blocks should
        not be set across more than that.
      </v-typography>
    </v-grid-row>
    <v-grid-row :cols="12" class="mb-8">
      <v-grid-col :start="3" :span="8" class="bg-transparent">
        <div class="flex flex-col items-center text-white justify-center p-4 bg-green-300">
          <v-typography variant="p">8 columns</v-typography>
          <v-typography variant="p">Regular content max width</v-typography>
        </div>
        <div class="bg-transparent">
          <v-typography variant="p">
            Light years. How far away dream of the mind's
            eye the only home we've ever known.
            Encyclopaedia galactica muse about paroxysm
            of global death. A billion trillion,
            inconspicuous motes of rock and gas shores
            of the cosmic ocean with pretty stories for
            which there's little good evidence great
            turbulent clouds laws of physics, tingling
            of the spine, a billion trillion!
          </v-typography>
        </div>
      </v-grid-col>
    </v-grid-row>
    <v-grid-row :cols="12" :gap="16" class="mb-8">
      <v-grid-col :span="8" class="bg-transparent">
        <div class="flex text-white justify-center p-4 bg-green-300">
          <v-typography variant="p">8 columns</v-typography>
        </div>
        <div class="bg-transparent">
          <v-typography variant="p">
            Light years. How far away dream of the mind's
            eye the only home we've ever known.
            Encyclopaedia galactica muse about paroxysm
            of global death. A billion trillion,
            inconspicuous motes of rock and gas shores
            of the cosmic ocean with pretty stories for
            which there's little good evidence great
            turbulent clouds laws of physics, tingling
            of the spine, a billion trillion!
          </v-typography>
        </div>
      </v-grid-col>
      <v-grid-col :span="4" class="bg-transparent">
        <div class="flex text-white justify-center p-4 bg-green-300">
          <v-typography variant="p">4 columns</v-typography>
        </div>
        <div class="bg-transparent">
          <v-typography variant="p">
            A billion trillion, inconspicuous motes of
            rock and gas shores of the cosmic ocean with
            pretty stories for which there's little good
            evidence great turbulent clouds laws of
            physics, tingling of the spine, a billion
            trillion!
          </v-typography>
        </div>
      </v-grid-col>
    </v-grid-row>
    <v-grid-row :cols="1">
      <v-typography variant="h3">
        Best practices
      </v-typography>
      <v-typography variant="p">
        • Keep layouts simple. Consider a single block of
        eight columns or two blocks of eight and four
        for basic layout.
      </v-typography>
      <v-typography variant="p">
        • Maximum line length should span up
        to eight columns, which is the ideal size for
        all content types. Do not go over this size for
        normal text.
      </v-typography>
    </div>
  `,
});

/** Default Variant */
export const Default = Template.bind({});