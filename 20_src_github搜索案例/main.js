import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 注册全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')