import { createApp } from 'vue';
import App from './App.vue';

// ROUTER
import router from './router';

// PINIA
import { createPinia } from 'pinia';
const pinia = createPinia();

// STYLES
import './assets/styles/index.less';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#skillometer');
