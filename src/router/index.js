import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
  const routes = [
    {
      path: '/:lang',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/:lang/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
    }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const langRegex = /^\/[a-z]{2}-[A-Z]{2}/;
  if (to.path === '/') { // 當網址從 http://localhost:8080/ 直接進入時
    next({path: '/' + (location.pathname.split('/')[1] || process.env.VUE_APP_I18N_LOCALE)}); // 套上語系路徑 http://localhost:8080/zh-TW/
  } else if (!langRegex.test(to.fullPath)) { // 沒有語系路徑開頭 
    next({path: '/' + ( !langRegex.test(location.pathname) ? process.env.VUE_APP_I18N_LOCALE : location.pathname.split('/')[1] || from.params.lang) + to.path}); // 套上語系路徑 http://localhost:8080/zh-TW/ 並加上後續要去的位置
  } else {
    next();
  }
})

export default router
