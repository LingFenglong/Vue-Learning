<template>
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
</template>

<script>
import {reactive, toRef, toRefs} from "vue";

export default {
  name: 'Student',
  setup() {
    let student = reactive({
      name: 'zs',
      age: 19
    })

    return {
      // ...toRefs(student)
      name: toRef(student, 'name'),
      age: toRef(student, 'age')
    }
  }
}
</script>

<style scoped>

</style>