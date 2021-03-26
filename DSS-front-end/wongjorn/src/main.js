import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LongdoMap from 'longdo-map-vue'

Vue.config.productionTip = false

Vue.use(LongdoMap, {
  load: {
    apiKey: '68cd5510a9da9701e87d7ca5cbc8eaef'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
