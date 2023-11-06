import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    console.log(this) // this指向vm对象
    console.dir(Vue)
    console.log(Vue.prototype)
    Vue.prototype.$bus = this
  }
}).$mount('#app')