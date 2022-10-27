import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'
import { key, store } from './store'

library.add(fas)

createApp(App)
    .use(router)
    .use(store, key)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
