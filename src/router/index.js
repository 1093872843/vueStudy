import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo/storeDemo',
      name: 'storeDemo',
      //动态导入组件
      component: () =>
      import('@/demo/storeDemo'),
    }
  ]
})
