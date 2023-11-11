import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource)

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 注册全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')