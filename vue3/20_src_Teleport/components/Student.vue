<template>
  <div class="student">
    <Dialog></Dialog>
  </div>
</template>

<script>
import {
  inject, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref
} from "vue";
import Dialog from "@/components/Dialog.vue";

export default {
  name: 'Student',
  components: {Dialog},
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
  .student {
    width: 700px;
    height: 200px;
    background-color: lightcoral;
  }
</style>