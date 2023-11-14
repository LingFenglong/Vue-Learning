<template>
  <button @click="isShow = true">打开对话框</button>
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h1>对话框标题</h1>
        <h3>对话框内容</h3>
        <h3>对话框内容</h3>
        <h3>对话框内容</h3>
        <button @click="isShow = false">关闭</button>
      </div>
    </div>
  </teleport>
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
    left: 0; top: 0; right: 0; bottom: 0;
    position: absolute;
    margin: auto;
  }

  .mask {
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

</style>