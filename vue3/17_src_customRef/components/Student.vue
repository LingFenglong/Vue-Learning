<template>
  <input v-model="keyWords"/>
  <h3>{{keyWords}}</h3>
</template>

<script>
import {
  customRef,
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
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(() => {
              trigger()
            }, delay)
          }
        }
      })
    }

    let keyWords = myRef("", 500)
    return {
      keyWords
    }
  }
}
</script>

<style scoped>

</style>