<template>
  <div class="student">
    <Suspense>
      <template v-slot:default>
        <Dialog></Dialog>
      </template>
      <template v-slot:fallback>
        <h1>加载中...</h1>
      </template>
    </Suspense>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
const Dialog = defineAsyncComponent(() => import("@/components/Dialog.vue"))
export default {
  name: 'Student',
  components: {Dialog},
  setup: function () {
  }
}
</script>

<style scoped>
  .student {
    width: 700px;
    height: 200px;
    background-color: lightcoral;
  }
</style>