<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: 'School',
    data() {
      return {
        name: 'hebnu',
        address: 'sjz'
      }
    },
    methods: {
      sendStudentNameToSchool(_, studentName) {
        console.log('@@ 我是School, 我接收到了学生名：' + studentName)
      }
    },
    mounted() {
      // this.$bus.$on('sendStudentNameToSchool', this.sendStudentNameToSchool)
      this.pubId = pubsub.subscribe('sendStudentNameToSchool', this.sendStudentNameToSchool);
    },
    beforeDestroy() {
      // this.$bus.$off('sendStudentNameToSchool')
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
  .school {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>