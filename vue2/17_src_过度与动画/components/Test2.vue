<template>
  <div>
    <button @click="show = !show">enter/leave</button> <br/>
    <transition-group name="hello" appear>
      <h1 v-show="show"
          class="hello"
          :key="1">Hello World!</h1>

      <h1 v-show="!show"
          class="hello"
          :key="2">ShangGuiGu</h1>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'Test2',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  /* 进入的起点、离开的终点 */
  .hello-enter, .hello-leave-to {
    transform: translateX(-100%);
  }
  .hello-enter-active, .hello-leave-active {
    transition: 0.5s linear;
  }
  /* 进入的终点、离开的起点 */
  .hello-enter-to, .hello-leave{
    transform: translateX(0);
  }
</style>