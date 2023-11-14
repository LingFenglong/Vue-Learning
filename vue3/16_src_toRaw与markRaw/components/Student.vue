<template>
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h1>爱好：{{hobby}}</h1>
  <h1>汽车：{{student.car}}</h1>

  <button @click="name += '!'">改名</button>
  <button @click="age++">改年龄</button>
  <button @click="hobby.h1.name += '%'; console.log(hobby.h1.name)">改爱好</button>
  <button @click="student.car.name += '^'; console.log(student.car.name)">改车名</button>

  <hr/>

  <h1>sum的值为：{{sum}}</h1>
  <button @click="sum++">sum++</button>
</template>

<script>
import {
  markRaw,
  reactive,
  readonly,
  ref,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs
} from "vue";

export default {
  name: 'Student',
  setup() {
    // let student = {
    //   name: 'zs',
    //   age: 19,
    //   hobby: {
    //     h1: {
    //       name: 'game'
    //     }
    //   }
    // }
    //
    // // 作用：将一个由reactive生成的响应式对象转为普通对象
    // console.log(`@@@ reactive`, reactive(student))
    // console.log(`@@@ toRow`, toRaw(reactive(student)))

    let sum = ref(0)

    let student = reactive({
      name: 'zs',
      age: 19,
      hobby: {
        h1: {
          name: 'game'
        }
      }
    })

    // 标记为raw数据，不然追加会变为reactive数据
    student.car = markRaw({
      name: 'bc',
      price: '4399'
    })

    return {
      student,
      ...toRefs(student),
      sum
    }
  }
}
</script>

<style scoped>

</style>