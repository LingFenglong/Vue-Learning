<template>
  <Student cc="lfl" @lfl="logLflEmited">
    <template v-slot:hah>
      <h3>App组件的插槽</h3>
    </template>
  </Student>
</template>

<script>
import Student from '@/components/Student.vue'
import {reactive} from "vue";
export default {
  name: 'App',
  components: {
    Student
  },
  setup() {
    let info = reactive({

    })

    let logLflEmited = () => {
      console.log('lfl emited')
    }

    return {
      info,
      logLflEmited
    }
  }
}
</script>

<style>

</style>
