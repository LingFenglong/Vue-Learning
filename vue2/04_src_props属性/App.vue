<template>
  <div>
    <Student name="zhangsan" :age="15" sex="male"></Student>
    <hr/>
    <Student name="lisi" :age="19" sex="female"></Student>
    <hr/>
    <Student :age="18"></Student>
  </div>
</template>

<script>
  import Student from './components/Student.vue';

  export default {
    name: 'App',
    components: {
      Student
    }
  }
</script>