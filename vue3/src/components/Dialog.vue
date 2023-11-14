<template>
  <button @click="isShow = true">打开对话框</button>
  <div v-if="true" class="mask">
    <div class="dialog">
      <h1>对话框标题</h1>
      <h3>对话框内容</h3>
      <h3>对话框内容</h3>
      <h3>对话框内容</h3>
      <button @click="isShow = false">关闭</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>

<style scoped>
  .dialog {
    height: 300px;
    width: 200px;
    background-color: lightskyblue;
    text-align: center;
    padding: 8px;
  }

</style>