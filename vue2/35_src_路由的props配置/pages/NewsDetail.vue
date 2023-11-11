<template>
  <div>
    <span>新闻编号：{{id}}</span>
    <br/>
    <span>新闻标题：{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: ['id', 'title'],
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>