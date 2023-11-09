<template>
  <div>
    <span>新闻编号：{{$route.query.id}}</span>
    <br/>
    <span>新闻标题：{{$route.query.title}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>