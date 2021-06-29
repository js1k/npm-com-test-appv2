import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ytoH5 from 'yto-h5'
import 'yto-h5/dist/yto-h5.css'

Vue.config.productionTip = false
Vue.use(ytoH5)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
