<template>
  <h1>当前num的值为：{{num}}</h1>
  <button @click="num++">点我num++</button>

  <hr/>

  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h1>工作：{{jobs}}</h1>
  <button @click="name += '6'">点我改名</button>
  <button @click="age++">点我年龄++</button>

</template>

<script>
import {reactive, ref, toRefs, watch, watchEffect} from "vue";

export default {
  name: 'Count',
  setup() {
    let num = ref(0)

    let person = reactive({
      name: 'zs',
      age: 19,
      jobs: ['teacher', 'student']
    })

    watch(num, (value, oldValue) => {
      console.log('num的值变化了', value, oldValue)
    })

    watchEffect(() => {
      console.log(`person.name的值变为了${person.name}`)
    })

    return {
      num,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>