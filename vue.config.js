/*
 * @Author: your name
 * @Date: 2020-06-05 16:56:04
 * @LastEditTime: 2020-06-16 17:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /rd-ipm-app/vue.config.js
 */

module.exports = {
  publicPath: './',
  //默认值: '/'
  //module.exports是一个对象，所以该位置可以写表达式
  // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，
  //所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
  //你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  // 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
  outputDir: 'mstyle',
  //打包输出路径，但是貌似只有用vue cli命令才有效
  productionSourceMap: false, 
  // productionSourceMap是否开启source map,在程序被打包部署的时候，代码会被编译压缩，导致错误提供的报错行index值
  // 和实际代码的值不相同，不方便维护。开启了source map后，就能够正确找到报错位置，但是生成source map会占用空间和时间资源，
  // 而且这样做也会导致代码泄漏的危险。通常重要核心的业务生产环境是不会开启这个的。
  runtimeCompiler:true
  //是否在客户端时进行编译。当我们在代码中使用了template模板创建vue实例时，启动该条命令，
  //但是*.vue 文件内部的template模板会在构建时被vue-loader预编译成 JavaScript。
  //所以你在最终打好的包里实际上是不需要编译器的只用运行时版本即可。
};
