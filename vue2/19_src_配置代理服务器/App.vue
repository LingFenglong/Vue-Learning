<template>
  <div>
    <span>{{student}}</span>
    <hr/>
    <span>{{car}}</span>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'App',
    components: {

    },
    data() {
      return {
        car: '',
        student: ''
      }
    },
    methods: {
      studentInfo() {
        axios.get('http://localhost:8080/api/student/students').then(
            response => {
              console.log('请求成功了', response.data)
              this.student = JSON.stringify(response.data)
            },
            error => {
              console.log('请求失败了', error.message)
              this.student = JSON.stringify(error)
            }
        )
      },
      carInfo() {
        axios.get('http://localhost:8080/api/car/cars').then(
            response => {
              console.log('请求成功了', response.data)
              this.car = JSON.stringify(response.data)
            },
            error => {
              console.log('请求失败了', error.message)
              this.car = JSON.stringify(error)
            }
        )
      }
    },
    mounted() {
      this.studentInfo()
      this.carInfo()
    },
    computed: {

    }
  }
</script>