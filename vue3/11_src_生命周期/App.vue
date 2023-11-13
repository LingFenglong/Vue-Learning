<template>
  <button @click="isShow = !isShow">点我切换isShow</button>
  <Count v-if="isShow" />
</template>

<script>
import Count from "@/components/Count.vue";
import {reactive, ref} from "vue";
export default {
  name: 'App',
  components: {
    Count
  },
  setup() {
    let isShow = ref(true)
    return {
      isShow
    }
  }
}
</script>

<style>

</style>
