import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/reset.less';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import '@/permission';
import i18n from '@/i18n/index';
import { getTimeRange, parseDate, debounce } from '@/utils';
import { TIME_RANGE, PARSE_DATE, DEBOUNCE } from '@/symbol';

const store = createPinia();
const app = createApp(App);
app.provide(TIME_RANGE, getTimeRange);
app.provide(PARSE_DATE, parseDate);
app.provide(DEBOUNCE, debounce);

app.use(i18n);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.mount('#app');
