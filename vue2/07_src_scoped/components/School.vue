<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: 'hebnu',
        address: 'sjz'
      }
    },
  }
</script>

<style scoped>
  .demo {
    background-color: rgb(114, 218, 241);
    color: rgb(45, 198, 83);
  }
</style>