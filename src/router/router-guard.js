import router from "./index.js";

//进入路由时调用
router.beforeEach((to, from, next) => {
/* 
  to: 目标路由参数
  from: 出发地路由参数
  next: 回调，作用等用于promise中的resolve
        后可传入参数：  
          next() :正常回调，进入to参数指向的路由
          next(false) :失败回调（布尔值），返回from参数指向的路由
          next(error): 异常回调（实例Error），进入router.onError()方法。
          next(path):重定向回调（字符串或者含path的对象），进入指定的peth路由。

*/
});

//路由进行在所有的next()确认之前。beforeEach()之后
router.beforeResolve((to, from) => {
/* 
  to: 目标路由参数
  from: 出发地路由参数
*/
})

//路由将在next()结束之后调用，没有next参数，并且不会影响路由跳转。
router.afterEach((to, from) => {
  // ...
})


/* 
  路由守卫在跳转时的触发顺序。
  beforeRouteLeave
  beforeEach.
  beforeRouteUpdate --如果是复用组件.
  beforeEnter.
  beforeRouteEnter
  beforeResolve 
  Resolve，或者是next()结束之后。
  afterEach .
  渲染DOM
  传入实例对象给 beforeRouteEnter. 
*/