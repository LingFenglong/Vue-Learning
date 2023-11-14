<template>
  <h1>{{data}}</h1>
</template>

<script>
import {inject} from "vue";

export default {
  name: 'Child',
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