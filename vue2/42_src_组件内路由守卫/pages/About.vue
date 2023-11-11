<template>
  <h2>我是About的内容</h2>
</template>

<script>

import App from "@/App.vue";

export default {
  name: 'About',
  beforeRouteEnter(to, from, next) {
    // to ===> /about
    if (localStorage.getItem('TOKEN') === '111111') {
      next()
    } else {
      alert('拒绝访问 about')
    }
  },
  beforeRouteLeave(to, from, next) {
    alert('欢迎下次使用 about')
    next()
  }
}
</script>

<style scoped>

</style>