import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import showMovice from '@/view/showMovice'
import a from "@/components/a"
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: a
    },
    {
      path: '/showMovice',
      name: '豆瓣电影',
      component: showMovice
    }
  ]
})
