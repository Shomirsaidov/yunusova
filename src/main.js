import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/css/utils.css'

createApp(App).use(store).use(router).mount('#app')
