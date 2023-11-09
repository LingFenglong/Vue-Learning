import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import store from './store'

Vue.config.productionTip = false

Vue.use(vueResource)

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    // 注册全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')