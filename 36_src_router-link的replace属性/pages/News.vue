<template>
  <div>
    <ul>
      <li v-for="n in news" :key="n.id">
<!--        <router-link :to="`/home/news/detail/${n.id}/${n.title}`">{{n.id}}&nbsp;&nbsp;&nbsp;&nbsp;{{n.title}}</router-link>-->

<!--        OR-->

        <router-link :to="{
          name: 'detail',
          params: {
            id: n.id,
            title: n.title
          }
        }">
          {{n.id}}&nbsp;&nbsp;&nbsp;&nbsp;{{n.title}}
        </router-link>
      </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      news: [
        {id: '001', title: '震惊！某...'},
        {id: '002', title: '震惊！某一...'},
        {id: '003', title: '震惊！某两名...'}
      ]
    }
  }
}
</script>

<style scoped>

</style>