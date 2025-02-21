import { createApp } from 'vue'
import App from './App.vue'
import './style.css';
import router from './router';
import PrimeVue from 'primevue/config';
import './main.css';
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: 'none'
})
app.mount('#app')
