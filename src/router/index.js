import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/index'

Vue.use(Router)

<<<<<<< HEAD
//核心路由 
const CORE_ROUTE = [
  {
    // 结果页面
    path: '/',
    name: 'home',
    component: Home,
  },
]

let router = new Router({
  routes: [...CORE_ROUTE],
});

//异步加载问题有时会导致Loading chunk failed错误，这是由于加载js失败
//我们使用异常捕获，重新加载页面,也可以做一些其他的异常捕获。
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});

export default router;
=======
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
>>>>>>> 11f20e0aaa2b2e88aaadaa5e0388c5a36c9e2a9f
