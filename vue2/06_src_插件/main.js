import Vue from 'vue'
import App from './App'
import myPlugins from './plugins'

Vue.config.productionTip = false

Vue.use(myPlugins)

new Vue({
  render: h => h(App)
}).$mount('#app')