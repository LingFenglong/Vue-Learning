<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="username"/>&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: 'UserSearch',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    searchUser() {
      this.$bus.$emit('updateUserList', {isFirst: false, user: [], isSearching: true})
      axios.get(`https://api.github.com/search/users?q=${this.username}`).then(
          response => {
            console.log(response.data)
            this.$bus.$emit('updateUserList', {isSearching: false, users: response.data})
          },
          error => {
            console.log(error.message)
            this.$bus.$emit('updateUserList', {isSearching: false, users: [], errorMsg: error.message})
          }
      )
    }
  }
}
</script>