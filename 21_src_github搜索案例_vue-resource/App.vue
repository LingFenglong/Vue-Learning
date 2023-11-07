<template>
  <div class="container">
    <UserSearch/>
    <UserList/>
  </div>
</template>

<script>
  import axios from "axios";
  import UserSearch from "@/components/UserSearch";
  import UserList from "@/components/UserList";

  export default {
    name: 'App',
    components: {
      UserList,
      UserSearch
    }
  }
</script>