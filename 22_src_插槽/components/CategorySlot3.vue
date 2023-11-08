<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      games:['红色警戒','穿越火线','劲舞团','超级玛丽']
    }
  }
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