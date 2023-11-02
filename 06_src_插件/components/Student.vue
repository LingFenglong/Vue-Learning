<template>
  <div class="student">
    <h2>sliceLen: {{sliceLen}}</h2>
    <button @click="incrSliceLen">点我sliceLen+1</button>
    <h2 @click="showName">学生姓名：{{name | sliceStr(sliceLen)}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        sliceLen: 1,
        name: 'zhangsan',
        age: 18
      }
    },
    methods: {
      incrSliceLen() {
        this.sliceLen++
      }
    }
  }
</script>

<style>
  .student {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>