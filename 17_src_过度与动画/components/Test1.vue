<template>
  <div>
    <button @click="show = !show">enter/leave</button> <br/>
    <transition name="hello" appear>
      <h1 v-show="show"
          class="hello">Hello World!</h1>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Test1',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .hello-enter-active {
    animation: slider 0.5s linear;
  }

  .hello-leave-active {
    animation: slider 0.5s linear reverse;
  }

  @keyframes slider {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>