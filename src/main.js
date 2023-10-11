import { createApp } from 'vue';
import App from './App.vue';

// ROUTER
import router from './router';

// PINIA
import { createPinia } from 'pinia';

// STYLES
import './assets/styles/index.less';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#skillometer');
