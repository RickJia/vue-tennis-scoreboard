import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global-style/style.styl'
import './global-style/icon.styl'
import './global-style/device-size.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
