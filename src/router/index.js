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
    component: Home,
/*  prop:true, 作用等同于tbeforeRouteEnter,不同的的是获取方式，通过定义组件中的prop属性，来获取路由上的参数。而不是使用beforeRouteEnter
               实现了路由和组建的分离 */
/*   beforeRouteEnter (to, from, next) {
      路由守卫
      路由进入前调用，此时组件实例还没有被创建，所以不存在this指向组件实例，如果想使用this，
      使用next的回调，next回调后，实例已被创建，beforeRouteEnter是唯一需要通过next获取组件实例this的方法
      next(vm => {vm.name})
    },
    beforeRouteUpdate (to, from, next) {
      路由守卫
      路由改变，组件并未跳转，而是被复用时调用
      举例来说 一个带占位符的路径来说，比如 /foo/:id
      从 /foo/1 ==>/foo/2，路由发生了改变，但是实际上组件并没有被刷新，而是被调用，此时不会触发created等钩子函数
      但是会调用 beforeRouteUpdate方法。
    },
    beforeRouteLeave (to, from, next) {
      路由首位
      组件离开时调用，如果你希望用户在意外掉关闭，而做出提示时，可以在这里写入相应的提示，并将next(false)返回
    } */
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
