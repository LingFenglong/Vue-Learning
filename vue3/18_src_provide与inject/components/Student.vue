<template>
  <h1>{{data}}</h1>
  <Child></Child>
</template>

<script>
import {
  inject
} from "vue";
import Child from "@/components/Child.vue";

export default {
  name: 'Student',
  components: {Child},
  setup() {
    let data = inject('data')
    return {
      data
    }
  }
}
</script>

<style scoped>

</style>