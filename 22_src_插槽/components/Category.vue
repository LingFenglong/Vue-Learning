<template>
  <div class="category">
    <h3>{{title}}</h3>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title', 'itemList']
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