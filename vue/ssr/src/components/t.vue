<template>
    <div>{{ initData?initData: 'loading...' }}</div>
</template>
<script>
export default {
   asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem')
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    initData () {
      return this.$store.state.data
    }
  }
}
</script>
<style scoped>

</style>
