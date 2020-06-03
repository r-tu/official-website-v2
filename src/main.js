import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueI18n from 'vue-i18n'
import i18n from '@/i18n'
import mixin from '@/mixins/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(ElementUI);
Vue.mixin(mixin)
Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
