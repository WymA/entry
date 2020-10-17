import Vue from 'vue'
import App from './App.vue'
import { Form } from 'vant'
import { Button } from 'vant'
import { Field } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Lazyload } from 'vant'
import { Swipe, SwipeItem } from 'vant'




Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Form)
Vue.use(Button)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Lazyload)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')


