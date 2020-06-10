import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import booking from '@/api/booking'
import airport from '@/api/booking/airport'
Vue.use(VueAxios, axios)

const api = ($axios) => ({
  booking: {
    ...airport(
      (($axios) => {
        const instance = $axios.create({
          baseURL: process.env.VUE_APP_BASE_API_URL,
          timeout: 3000,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        instance.interceptors.request.use((config) => {
          // config.headers.common['jx-lang'] = Vue.$tools.currentLang()
          return config
        })
        return instance
      })($axios)
    ), // 拆分模組
    ...booking($axios) // 拆分模組
  }
})

export default {
  install(Vue) {
    Vue.$api = Vue.prototype.$api = api(axios) // 提供靜態方法及原型方法都可操作
  }
}
