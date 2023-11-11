<template>
  <div>
    <Student></Student>
    <span v-random-big="10"></span> <br/>
  </div>
</template>

<script>
  import Student from './components/Student'

  export default {
    name: 'App',
    components: {
      Student
    }
  }
</script>