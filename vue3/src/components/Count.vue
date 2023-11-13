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
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  toRefs
} from "vue";

export default {
  name: 'Count',
  setup() {
    let num = ref(0)

    let person = reactive({
      name: 'zs',
      age: 19,
      jobs: ['teacher', 'student']
    })

    // beforeCreate() {
    //   console.log('@@@ beforeCreate')
    // }, // 无 setup代替
    // created() {
    //   console.log('@@@ created')
    // }, // 无 setup代替

    onBeforeMount(() => {
      console.log('@@@ beforeMount')
    })

    onMounted(() => {
      console.log('@@@ mounted')
    })

    onBeforeUpdate(() => {
      console.log('@@@ beforeUpdate')
    })

    onUpdated(() => {
      console.log('@@@ updated')
    })

    onBeforeUnmount(() => {
      console.log('@@@ beforeUnmount')
    })

    onUnmounted(function () {
      console.log('@@@ unmounted')
    })

    return {
      num,
      ...toRefs(person)
    }
  },
  // beforeCreate() {
  //   console.log('@@@ beforeCreate')
  // },
  // created() {
  //   console.log('@@@ created')
  // },
  // beforeMount() {
  //   console.log('@@@ beforeMount')
  // },
  // mounted() {
  //   console.log('@@@ mounted')
  // },
  // beforeUpdate() {
  //   console.log('@@@ beforeUpdate')
  // },
  // updated() {
  //   console.log('@@@ updated')
  // },
  // beforeUnmount() {
  //   console.log('@@@ beforeUnmount')
  // },
  // unmounted() {
  //   console.log('@@@ unmounted')
  // }
}
</script>

<style scoped>

</style>