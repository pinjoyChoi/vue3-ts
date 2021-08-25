import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// antd-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 国际化 i18n
import i18n  from './language/i18n';
// font-awesome 
import 'font-awesome/css/font-awesome.min.css';

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(i18n)
  .mount('#app')
