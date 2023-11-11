<template>
  <div>
    <School></School>
    <hr/>
    <Student ref="student"></Student>
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'

  export default {
    name: 'App',
    components: {
      School,
      Student
    },
    methods: {
    },
    mounted() {
    }
  }
</script>