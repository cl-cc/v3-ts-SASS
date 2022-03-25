import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.less'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia'
import '@/permission'

const store = createPinia()
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
