import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Particles from 'particles.vue3';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import '@/assets/fontawesome/all.min.js';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { SetPrimeVueComponents } from './app-prime-vue';

const app = createApp(App);

app.use(PrimeVue, { inputStyle: 'filled' });
app.use(store);
app.use(router);
app.use(Particles);
SetPrimeVueComponents(app);

app.mount('#app');
