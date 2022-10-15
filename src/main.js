/* Create vue app */
import { createApp } from "vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import entry point component */
import App from "./App.vue";

/* Import global styles */
import "./assets/main.css";

/* add icons to the library */
library.add(faUserSecret)

/* Create app */
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
