import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import booking from '@/api/booking'
import airport from '@/api/booking/airport'
Vue.use(VueAxios, axios)

const api = ($axios) => ({
  getTestApi() {
    return $axios.get('https://w5q6k.sse.codesandbox.io/api/v1/cumulative')
  },
  booking: {
    ...airport($axios), // 拆分模組
    ...booking($axios) // 拆分模組
  }
})

export default {
  install(Vue) {
    Vue.$api = Vue.prototype.$api = api(axios) // 提供靜態方法及原型方法都可操作
  }
}
