<template>
  <div class="student">
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{mAge}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="incrAge">点我age+1</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        msg: '使用Vue',
        mAge: this.age
      }
    },
    // 1. 直接写法
    // props: ['name', 'age', 'sex']

    // 2. 指定类型
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String
    // }

    // 3. 指定required default
    props: {
      name: {
        type: String,
        required: false,
        default: 'null name'
      },
      age: {
        type: Number,
        required: true
      },
      sex: {
        type: String,
        required: false,
        default: 'female'
      }
    },
    methods: {
      incrAge() {
        this.mAge++
      }
    }
  }
</script>

<style>
  .school {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>