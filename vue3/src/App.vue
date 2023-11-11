<template>
  <h1>Hello Vue3!</h1>
  <School/>
  <StudentRender/>
</template>

<script>
import School from '@/components/School.vue'
import StudentRender from '@/components/StudentRender.vue'
export default {
  name: 'App',
  components: {
    School,
    StudentRender
  }
}
</script>

<style>

</style>
