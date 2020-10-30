import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/index.less' // global css

const Vue = createApp(App);

Vue.config.productionTip = false;

Vue.use(store)
Vue.use(router)
Vue.use(Antd)
Vue.mount('#app')


