import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import i18n from './i18n'

const app = createApp(App)

app.use(createPinia())
app.use(Vue3Toasity)
app.use(i18n)

app.mount('#app')
