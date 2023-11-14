<template>
  <Student/>
</template>

<script>
import Student from "@/components/Student.vue";
import {provide} from "vue";
export default {
  name: 'App',
  components: {
    Student
  },
  setup() {
    let data = {
      num: 1,
      str: '666',
      obj: {
        i: 's',
        j: 'k'
      }
    }
    provide('data', data)
  }
}
</script>

<style>

</style>
