<template>
  <div class="home">
    <div class="main">
      <div class="notification">
        <span>借用平台上线啦！借用平台上线啦！借用平台上线啦！</span>
      </div>
      <div class="entry">
        <div class="item material">
          <span>物品领取</span>
        </div>
        <div class="item">
           <span>共享图书</span>
        </div>
        <div class="item">
           <span>共享雨伞</span>
        </div>
      </div>
    </div>
    <BottomNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from "../components/BottomNav.vue"
export default {
  name: "home",
  components: {
    BottomNav
  }
};
</script>
<style lang="scss" scoped>
.home {
  .main {
    &::before {
      content: "";
      display: table;
      padding-top: 0.01px;
    }
    text-align: left;
    height: 92vh;
    background: #f5f5f5 url("../assets/index/bg_home@3x.png") center no-repeat;
    background-size: 95% 97%;
    .notification {
      padding: 2vh 3vw;
      line-height: 4vh;
      margin: 3vh 11vw 2vh 18vw;
      height: 11vh;
      font-size: 17px;
    }
  }
  .entry {
    position: relative;
    z-index: 1;
        margin: 0 11vw 0 7vw;
    height: 69vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        padding: 9vh 0;
        .item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          // width: 80%;
          margin: 0 8vw 0 10vw;
          height: 9vh;
          background: rgb(118,209,230);
          border: 2px solid rgb(51,51,51);
              border-radius: 1.2vw;
              color: rgb(255,201,31);
              font-size: 5.26667vw;
              &::after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: .7vh;
                left: -2.2vw;
                z-index: -1;
                background: rgb(0,135,204);
                border: 2px solid rgb(51,51,51);
              border-radius: 1.2vw;
              }
          &.material {
          }
        }
  }
}
</style>