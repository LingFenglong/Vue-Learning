<template>
  <h1>{{data}}</h1>
</template>

<script>
import {
  inject, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref
} from "vue";

export default {
  name: 'Student',
  setup: function () {
    let data = inject('data')

    console.log(isProxy(reactive({ num: 1 })));
    console.log(isReactive(reactive({ num: 2 })))
    console.log(isRef(ref(4)))
    console.log(isReadonly(readonly(reactive({num: 8}))))
    console.log(isProxy(readonly(reactive({num: 8}))));

    return {
      data
    }
  }
}
</script>

<style scoped>

</style>