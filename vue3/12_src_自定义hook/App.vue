<template>
  <h1>点击的坐标为：</h1>
  <h2>x：{{x}}</h2>
  <h2>y：{{y}}</h2>
</template>

<script>
import usePoint from "@/hooks/usePoint";
import {toRefs} from "vue";
export default {
  name: 'App',
  components: {

  },
  setup() {
    let point = usePoint();

    return {
     ...toRefs(point)
    }
  }
}
</script>

<style>

</style>
