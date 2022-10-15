import { app } from '@storybook/vue3';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
  faCircleCheck,
  faCircleXmark,
  faCircleInfo,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faSpinner,
  faUpRightAndDownLeftFromCenter,
  faMinus,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faArrowTrendUp,
  faArrowTrendDown,
  faCheck,
  faXmark,
  faCalendar,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

import {
  faTwitter,
  faSquareFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import "../src/assets/main.css";

/* add icons to the library */
library.add(
  faCircleCheck,
  faCircleXmark,
  faCircleInfo,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faSpinner,
  faUpRightAndDownLeftFromCenter,
  faMinus,
  faPlus,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faArrowTrendUp,
  faArrowTrendDown,
  faCheck,
  faXmark,
  faCalendar,
  faTwitter,
  faSquareFacebook,
  faInstagram,
  faMagnifyingGlass,
)

app.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}