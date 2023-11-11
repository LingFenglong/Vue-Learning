<template>
  <div>
    <span>新闻编号：{{$route.params.id}}</span>
    <br/>
    <span>新闻标题：{{$route.params.title}}</span>
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