<template>
  <div>
    <img src="./assets/qrcode.jpg" alt class="dc-code">
    <router-link to="/">首页</router-link>
    <router-link to="/lazy-load">懒加载</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
.dc-code {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
