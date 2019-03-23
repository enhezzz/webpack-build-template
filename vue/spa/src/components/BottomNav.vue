<template>
  <div class="bottom-nav">
    <router-link class="nav-item" to="/" tag="div">
      <span>首页</span>
    </router-link>
    <router-link class="nav-item" to="/me" tag="div">
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bottom-nav {
  position: relative;
  z-index: 1;
  height: 8vh;
  border-top: 2px solid rgb(51, 51, 51);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(245, 245, 245);
  .nav-item {
    position: relative;
    width: 37%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(252, 184, 20);
    border: 1px solid rgb(51, 51, 51);
    border-radius: 3px;
    color: #fff;
    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: rgb(0, 135, 204);
      border: 1px solid rgb(51, 51, 51);
      border-radius: 3px;
    }
  }
}
</style>