<template>
  <div>
    <h2>webpack的基本解释</h2>
    <ul>
      <li>webpack是一个打包工具</li>
      <li>
        打包就是把源代码经过一系列处理输出为最终代码的过程，这是webpack官网的封面解释
      </li>
    </ul>
    <img src="./img/1.png" />

    <h2>什么是chunk</h2>
    <ul>
      <li>chunk就是打包成的一个个的块</li>
      <li>
        我们以前用query之类的开发的时候，js，css等文件都是单独引入的，如下图
      </li>
      <div class="codeArea-div">
        &lt;link rel="stylesheet" href="./bootstrap.css"&gt; &lt;link
        rel="stylesheet" href="./bootstrap-datepicker.css"&gt; &lt;script
        src="./jquery.min.js"&gt;&lt;/script&gt; &lt;script
        src="./bootstrap.min.js"&gt;&lt;/script&gt;
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
