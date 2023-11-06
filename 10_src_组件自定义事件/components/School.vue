<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName(name)">发送学校名字</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    props: ['sendSchoolName'],
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