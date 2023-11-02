<template>
  <div id="school">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>  
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        schoolName: 'hb',
        address: 'sjz'
      }
    }
  }
</script>

<style>
  #school {
    background-color: red;
    color: white;
  }
</style>