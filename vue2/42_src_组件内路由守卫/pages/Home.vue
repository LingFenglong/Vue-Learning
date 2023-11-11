<template>
  <div>
    <h2 :style="h2Style">Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" :to="{name: 'news'}">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/messages">Message</router-link>
        </li>
      </ul>
      <keep-alive :include="['News']">
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      h2Style: {
        opacity: 1.0
      }
    }
  }
}
</script>

<style scoped>

</style>