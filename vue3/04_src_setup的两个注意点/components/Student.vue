<template>
  姓：<input type="text" v-model="info.lastname">
  <br/>
  名：<input type="text" v-model="info.firstname">
  <br/>
  全名：<input type="text" v-model="info.fullName">
<!--  <slot name="hah"></slot>-->
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: 'Student',
  props: ['cc'],
  setup(props, context) {
    console.log(props, context)
    console.log('cc prop: ', props.cc)

    console.log(context.attrs)  // cc lfl
    console.log(context.emits)  // onLfl
    console.log(context.slots)  // hah

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