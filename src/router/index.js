import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import tools from '@/js/tools'
Vue.use(tools)
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: () => {
      return '/' + (Vue.$tools.currentLang() || process.env.VUE_APP_I18N_LOCALE)
    }
  },
  {
    path: '/:lang',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
  },
  {
    path: '/:lang/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
  },
  {
    path: '/:lang/member/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/MemberCenter/Login.vue')
  },
  {
    path: '/:lang/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "Member" */ '@/views/MemberCenter/Member.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 沒有語系路徑開頭
  if (!Vue.$tools.langRegex.test(to.fullPath)) {
    let lang = !Vue.$tools.langRegex.test(location.pathname)
      ? process.env.I18N_LOCALE
      : Vue.$tools.currentLang() || from.params.lang
    // 套上語系路徑 http://localhost:8080/zh-TW/ 並加上後續要去的位置
    next({ path: '/' + lang + to.path })
  } else {
    // 檢查需要登入頁面(用正規是語法判斷)
    if (/^(member|vip)$/i.test(to.name)) {
      if (!store.state.isLogin) {
        // 沒有登入則導到登入頁
        next({ path: '/member/login' })
        return
      }
    }
    next()
  }
})

export default router
