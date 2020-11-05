import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home/index";

Vue.use(Router);

//核心路由
const CORE_ROUTE = [
  {
    // 结果页面
    path: "/",
    name: "home",
    component: Home
  },
  {
    // 结果页面
    path: "/test/dropDown",
    name: "home",
    component: () => import("@/component/dropDown/test.vue")
  }
];

//Css样式路由
const CSS_ROUTE = [
  {
    // 结果页面
    path: "/css/wired/opacity01",
    name: "opacity01",
    component: () => import("@/weirdCss/opacity/opacity-weird1.vue")
  }   
];

let router = new Router({
  routes: [...CORE_ROUTE, ...CSS_ROUTE]
});

//异步加载问题有时会导致Loading chunk failed错误，这是由于加载js失败
//我们使用异常捕获，重新加载页面,也可以做一些其他的异常捕获。
router.onError(error => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  const targetPath = router.history.pending.fullPath;
  if (isChunkLoadFailed) {
    router.replace(targetPath);
  }
});

export default router;
