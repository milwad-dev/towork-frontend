import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json';

    return config;
}, error => Promise.reject(error));

app.use(createPinia())
app.use(router)

app.mount('#app')
