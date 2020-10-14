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
  outputDir: 'mstyle',
  //打包输出路径，但是貌似只有用vue cli命令才有效
  productionSourceMap: false, 
  // productionSourceMap是否开启source map,在程序被打包部署的时候，代码会被编译压缩，导致错误提供的报错行index值
  // 和实际代码的值不相同，不方便维护。开启了source map后，就能够正确找到报错位置，但是生成source map会占用空间和时间资源，
  // 而且这样做也会导致代码泄漏的危险。通常重要核心的业务生产环境是不会开启这个的。
  runtimeCompiler:true
  //runtimeCompiler
  // Render和  https://www.imooc.com/article/295888?block_id=tuijian_wz
};
