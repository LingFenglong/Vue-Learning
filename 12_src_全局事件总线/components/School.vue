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
    },
    methods: {
      sendStudentNameToSchool(studentName) {
        console.log('@@ 我是School, 我接收到了学生名：' + studentName)
      }
    },
    mounted() {
      this.$bus.$on('sendStudentNameToSchool', this.sendStudentNameToSchool)
    },
    beforeDestroy() {
      this.$bus.$off('sendStudentNameToSchool')
    }
  }
</script>

<style>
  .school {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>