import { createApp } from './app'
import Vue from 'vue'
let { app, router, store } = createApp()

//  匹配要渲染的视图后，再获取数据：
Vue.mixin({
    beforeMount () {
      const { asyncData } = this.$options
      if (asyncData) {
        // 将获取数据操作分配给 promise
        // 以便在组件中，我们可以在数据准备就绪后
        // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
        this.dataPromise = asyncData({
          store: this.$store,
          route: this.$route
        })
      }
    }
  })

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
    app.$mount('#app')
})