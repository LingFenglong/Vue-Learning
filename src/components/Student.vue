<template>
  <div id="stuent">
    <h2>学生姓名：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>  
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        studentName: 'zs',
        age: 20
      }
    }
  }
</script>

<style>
  #student {
    background-color: lightblue;
    color: white;
  }
</style>