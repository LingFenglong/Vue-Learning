<template>
  <div>
    <School :sendSchoolName="sendSchoolName"></School>
    <hr/>
    <!-- <Student v-on:cc="sendStudentName"></Student> -->
    <!-- <Student @cc="sendStudentName"></Student> -->
    <Student ref="student" @click.native="showSomething"></Student>
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
      sendSchoolName(name) {
        console.log('@@App Component --- schoolName', name);
      },
      sendStudentName(name) {
        console.log('@@App Component --- studentName', name);
      },
      showSomething() {
        alert('something')
      }
    },
    mounted() {
      // student触发cc事件时，回调sendStudentName方法
      this.$refs.student.$on('cc', this.sendStudentName)
    }
  }
</script>