<template>
  <div class="school">
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
    }
  }
</script>

<style>
  .school {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>