import Vue from "vue";
import Router from "vue-router";
import Home from "@/view/Home/index";
import NotFound from "@/view/Home/index";
import HomeBarSelf from "@/view/Home/HomeBarSelf";

Vue.use(Router);

//核心路由
const CORE_ROUTE = [
  {
    // 结果页面
    path: "/",
    name: "home",
    component: Home
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
    /* 
      懒加载，vue是单页面框架，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，
          使用懒加载，浏览器只有在访问到对应模块时，才会进行数据加载并缓存，大大减少了响应时间。
        如果你仅仅是本地修改了测试，那是莫得任何效果，因为他并没有被webpack打成文件。
    */
    component: () => import("@/view/weirdCss/index.vue")
  },
  {
    // 过渡演示
    path: "/css/wired/transitionIndex",
    name: "transitionIndex",
    component: () => import("@/view/weirdCss/transition/transition-index.vue")
  },
  {
    // 阴影演示
    path: "/css/wired/boxShadowIndex",
    name: "boxShadowIndex",
    component: () => import("@/view/weirdCss/box-shadow/box-shadow-index.vue")
  },
  {
    // shape演示
    path: "/css/wired/shapeIndex",
    name: "shapeIndex",
    component: () => import("@/view/weirdCss/shape/shape-index.vue")
  }
];

const COMPONENT_ROUTE = [
  {
    // Css首页
    path: "/component",
    name: "wiredComponent",
    component: () => import("@/view/wiredComponent/index.vue")
  },
  {
    // 预览
    path: "/component/singlePreView",
    name: "singlePreView",
    component: () =>
      import("@/view/wiredComponent/preViewImg/single-preview.vue")
  },
  {
    // 拖动
    path: "/component/drag",
    name: "drag",
    component: () => import("@/view/wiredComponent/comDrag/com-drag.vue")
  },
  {
    // 图片3d效果跟随鼠标移动
    path: "/component/3dPictureMove",
    name: "3dPictureMove",
    component: () => import("@/view/wiredComponent/3dPictureMove/index.vue")
  }
];

const VUE_ROUTE = [
  {
    // vue技术
    path: "/vue",
    name: "vue",
    component: () => import("@/view/weirdVue/index.vue")
  },
  {
    // vue技术
    path: "/vue/vuex",
    name: "vuex",
    component: () => import("@/view/weirdVue/weirdVuex/index.vue"),
    //子路由能够继承路由的内容作为前缀，同时和<router-view>组合使用能够实现单个页面的内容切换，而不是页面跳转。
    children: [
      {
        path: "introduce",
        component: () => import("@/view/weirdVue/weirdVuex/introduce.vue")
      }
    ]
  },
  {
    // vue技术
    path: "/vue/self",
    name: "vue",
    component: () => import("@/view/weirdVue/vue/index.vue"),
    //子路由能够继承路由的内容作为前缀，同时和<router-view>组合使用能够实现单个页面的内容切换，而不是页面跳转。
    children: [
      {
        path: "introduce",
        component: () => import("@/view/weirdVue/vue/introduce.vue")
      },
      {
        path: "vueHtml",
        component: () => import("@/view/weirdVue/vue/vueHtml.vue"),
      }
    ]
  },
  {
    // webpack技术
    path: "/webpack",
    name: "vue",
    component: () => import("@/view/weirdVue/webpack/index.vue"),
    //子路由能够继承路由的内容作为前缀，同时和<router-view>组合使用能够实现单个页面的内容切换，而不是页面跳转。
    children: [
      {
        path: "introduce",
        component: () => import("@/view/weirdVue/webpack/introduce.vue")
      },
      // {
      //   path: "vueHtml",
      //   component: () => import("@/view/weirdVue/webpack/1.vue"),
      // }
    ]
  }
];

const WEB_ROUTE = [
  {
    // web通用技术
    path: "/web",
    name: "web",
    component: () => import("@/view/weirdWeb/index.vue")
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

//路由的最终结果需要的是一个含有指定格式的对象。
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

/* vue-router 3.1版本以上，重复点击同一个路由地址会报错  NavigationDuplicated
  该报错不影响功能，但是很烦。添加以下代码可以解决该报错。
  或者你可以将vue-router 换成3.1以前的版本
*/
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
