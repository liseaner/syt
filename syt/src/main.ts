import { createApp } from 'vue';
import './style.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from '@/router'
import '@/style/reset.scss'
//引入全局组件--顶部、底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue';
import HosiptalBottom from '@/components/hospital_bottom/index.vue';

// 利用creaeteApp方法创建应用实例，且将应用
// createApp(App).mount('#app')
const app=createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HosiptalBottom', HosiptalBottom);
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
  })
app.mount('#app');

