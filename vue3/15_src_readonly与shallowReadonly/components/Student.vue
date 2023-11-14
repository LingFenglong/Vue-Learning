<template>
<!--  <h1>姓名：{{name}}</h1>-->
<!--  <h1>年龄：{{age}}</h1>-->
<!--  <h1>爱好：{{hobby}}</h1>-->

<!--  <button @click="name += '!'">改名</button>-->
<!--  <button @click="age++">改年龄</button>-->
<!--  <button @click="hobby.h1.name += '%'; console.log(hobby.h1.name)">改爱好</button>-->

  <h1>姓名：{{student.name}}</h1>
  <h1>年龄：{{student.age}}</h1>
  <h1>爱好：{{student.hobby}}</h1>

  <button @click="student.name += '!'">改名</button>
  <button @click="student.age++">改年龄</button>
  <button @click="student.hobby.h1.name += '%'; console.log(student.hobby.h1.name)">改爱好</button>

  <hr/>

  <h1>sum的值为：{{sum}}</h1>
  <button @click="sum++">sum++</button>
</template>

<script>
import {reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRef, toRefs} from "vue";

export default {
  name: 'Student',
  setup() {
    // let student = readonly(reactive({
    //   name: 'zs',
    //   age: 19,
    //   hobby: {
    //     h1: {
    //       name: 'game'
    //     }
    //   }
    // }))

    // let student = readonly(ref({
    //   name: 'zs',
    //   age: 19,
    //   hobby: {
    //     h1: {
    //       name: 'game'
    //     }
    //   }
    // }))

    let student = shallowReadonly(reactive({
      name: 'zs',
      age: 19,
      hobby: {
        h1: {
          name: 'game'
        }
      }
    }))


    let sum = ref(0)

    return {
      // ...toRefs(student),
      student,
      sum
    }
  }
}
</script>

<style scoped>

</style>