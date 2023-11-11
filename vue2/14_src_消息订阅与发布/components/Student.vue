<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="sendStudentName">发送学生姓名给School</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name: 'Student',
    data() {
      return {
        name: 'zs',
        age: 18
      }
    },
    methods: {
      sendStudentName() {
        // this.$bus.$emit('sendStudentNameToSchool', this.name)
        pubsub.publish('sendStudentNameToSchool', this.name)
      },
    }
  }
</script>

<style>
  .student {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>