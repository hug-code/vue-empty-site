import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import './utils/filter'
import './mock/index'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
