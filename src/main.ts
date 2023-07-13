import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'

// 引入模板的全局样式
import '@/styles/index.scss'

import router from './router'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn
})

app.use(ElementPlus);

app.use(router)

app.mount('#app')