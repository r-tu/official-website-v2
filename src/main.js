import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import axios from './axios';
import globalMixin from './mixins/global'

Vue.mixin(globalMixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  axios,
  render: h => h(App)
}).$mount('#app')
