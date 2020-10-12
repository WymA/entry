import Vue from 'vue'
import App from './App.vue'
import { Form } from 'vant'
import { Button } from 'vant'
import { Field } from 'vant'

Vue.use(Form)
Vue.use(Button)
Vue.use(Field)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
