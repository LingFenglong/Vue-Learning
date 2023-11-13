<template>
  姓：<input type="text" v-model="info.lastname">
  <br/>
  名：<input type="text" v-model="info.firstname">
  <br/>
  全名：<input type="text" v-model="info.fullName">
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'Student',
  setup() {
    let info = reactive({
      firstname: 'san',
      lastname: 'zhang',
      fullName: computed({
        get() {
          return info.lastname + '-' + info.firstname
        },
        set(value) {
          let arr = value.split('-');
          info.lastname = arr[0]
          info.firstname = arr[1]
        }
      })
    })

    return {
      info
    }
  }
}
</script>

<style scoped>

</style>