import Vue from 'vue'
import App from './App.vue'
import router from './router'
import source from './source'

Vue.config.productionTip = false

new Vue({
  router,
  source,
  render: h => h(App),
}).$mount('#app')
