const tools = {
  langRegex: /^\/[a-z]{2}-[A-Z]{2}/,
  currentLang: location.pathname.split('/')[1]
}

export default {
  install(Vue) {
    Vue.$tools = Vue.prototype.$tools = tools
  }
}




