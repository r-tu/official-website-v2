import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhTW from '@/locales/zh-TW'
import enUS from '@/locales/en-US'

Vue.use(VueI18n)

export default (async () => {
  const messages = {}
  messages['zh-TW'] = await zhTW()
  messages['en-US'] = await enUS()
  return new VueI18n({
    locale: Vue.$tools.currentLang() || process.env.VUE_APP_I18N_LOCALE,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
    messages
  })
})()
