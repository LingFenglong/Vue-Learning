<template>
  <h1>学生信息</h1>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>性别：{{sex}}</h3>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    let student = reactive({
      name: 'zs',
      age: 19,
      sex: 'male'
    })

    return {
      ...toRefs(student)
    }
  }
}
</script>

<style>

</style>