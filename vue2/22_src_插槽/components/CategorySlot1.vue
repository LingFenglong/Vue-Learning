<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title']
}
</script>

<style scoped>
  h3 {
    text-align: center;
    background-color: #afbbec;
  }

  .category {
    background-color: lightskyblue;
    width: 200px;
    height: 300px;
  }
</style>