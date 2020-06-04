const tools = {
  langRegex: /^\/[a-z]{2}-[A-Z]{2}/,
  currentLang: location.pathname.split('/')[1]
}

export default {
  install(Vue) {
    Vue.$tools = Vue.prototype.$tools = tools // 提供靜態方法及原型方法都可操作
  }
}




