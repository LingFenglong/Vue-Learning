<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'zhangsan',
        age: 18
      }
    }
  }
</script>

<style scoped>
  .demo {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>