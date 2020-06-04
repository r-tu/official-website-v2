import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router' // 裡面包含tools載入
import store from '@/store'
import i18n from '@/i18n'
import mixin from '@/mixins/global'
import ElementUI from 'element-ui'
import api from '@/api'  // 裡面包含axios載入
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(ElementUI)
Vue.use(api)
Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
