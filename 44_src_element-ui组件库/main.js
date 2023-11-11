import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

import { Button, Calendar, Table, TableColumn } from 'element-ui'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Calendar.name, Calendar)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')