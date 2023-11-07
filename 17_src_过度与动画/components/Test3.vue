<template>
  <div>
    <button @click="show = !show">enter/leave</button> <br/>
    <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeInTopLeft"
        leave-active-class="animate__fadeOutTopRight"
        appear>
      <h1 v-show="show"
          class="hello">Hello World!</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: 'Test3',
  data() {
    return {
      show: true
    }
  }
}

</script>

<style scoped>

</style>