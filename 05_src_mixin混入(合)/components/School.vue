<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import { mixin } from '../mixin'
  export default {
    name: 'School',
    data() {
      return {
        name: 'hebnu',
        address: 'sjz'
      }
    },
    // mixins: [mixin]
  }
</script>

<style>
  .school {
    background-color: rgb(114, 218, 241);
    color: rgb(45, 198, 83);
  }
</style>