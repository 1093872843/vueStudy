import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home/index";
import NotFound from "@/view/Home/index";

Vue.use(Router);

//核心路由
const CORE_ROUTE = [
  {
    // 结果页面
    path: "/",
    name: "home",
    component: Home
  }
];

//Css样式路由
const CSS_ROUTE = [
  {
    // Css首页
    path: "/css/wired",
    name: "wired",
    component: () => import("@/weirdCss/index.vue")
  },
  {
    // 过渡演示
    path: "/css/wired/transitionIndex",
    name: "transitionIndex",
    component: () => import("@/weirdCss/transition/transition-index.vue")
  },
  {
    // 阴影演示
    path: "/css/wired/boxShadowIndex",
    name: "boxShadowIndex",
    component: () => import("@/weirdCss/box-shadow/box-shadow-index.vue")
  },
  {
    // shape演示
    path: "/css/wired/shapeIndex",
    name: "shapeIndex",
    component: () => import("@/weirdCss/shape/shape-index.vue")
  }
];

const COMPONENT_ROUTE = [
  {
    // Css首页
    path: "/component",
    name: "wiredComponent",
    component: () => import("@/wiredComponent/index.vue")
  },
  {
    // 预览
    path: "/component/singlePreView",
    name: "singlePreView",
    component: () => import("@/wiredComponent/preViewImg/single-preview.vue")
  },
  {
    // 拖动
    path: "/component/drag",
    name: "drag",
    component: () => import("@/wiredComponent/comDrag/com-drag.vue")
  }
];

const VUE_ROUTE = [
  {
    // vue技术
    path: "/vue",
    name: "vue",
    component: () => import("@/weirdVue/index.vue")
  },
  {
    // vue技术
    path: "/vue/vuex",
    name: "vuex",
    component: () => import("@/weirdVue/weirdVuex/index.vue"),
    //子路由能够继承路由的内容作为前缀，同时和<router-view>组合使用能够实现单个页面的内容切换，而不是页面跳转。
    children: [
      {
        path: "introduce",
        component: () => import("@/weirdVue/weirdVuex/introduce.vue")
      }
    ]
  }
];

const WEB_ROUTE = [
  {
    // web通用技术
    path: "/web",
    name: "web",
    component: () => import("@/weirdWeb/index.vue")
  }
];

const ERR_ROUTE = [
  {
    path: "/notFound",
    name: "notFound",
    component: NotFound
  },
  {
    // web通用技术
    path: "*",
    name: "重定向",
    redirect: "/"
  }
];
let router = new Router({
  routes: [
    ...CORE_ROUTE,
    ...CSS_ROUTE,
    ...COMPONENT_ROUTE,
    ...VUE_ROUTE,
    ...WEB_ROUTE,
    //  ...ERR_ROUTE必须放在最后
    ...ERR_ROUTE
  ]
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
