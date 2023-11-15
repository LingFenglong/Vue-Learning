<template>
  <Student></Student>
</template>

<script>
import Student from "@/components/Student.vue"
import { getCurrentInstance } from 'vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Student
  },
  setup(props, context) {
    // console.log(context);
    // console.log(getCurrentInstance());

    // const promise = new Promise((resolve, reject) => {
    //   // resolve()    // resolve状态
    //   // reject()     // reject状态
    //   console.log('我在promise中做了一些工作');
    //   // resolve('我是promise中resolve的参数')
    //   reject('我是promise中reject的参数')
    // }).then((data) => {
    //   console.log(data)
    // }).catch((error) => {
    //   console.log(error)
    // })

// -----------------------------------------------------------------------------------

    // const promise = async () => {
    //   console.log('我在async promise中做了一些工作')
    //   throw new Error('不好，出错了')
    //   return '我是async promise中的返回值'
    // }

    // try {
    //   console.log('函数开始调用');
    //   const result = await promise()
    //   console.log(result)
    // } catch (error) {
    //   console.log(error);
    // }

// -----------------------------------------------------------------------------------

    // const randQingHua = () => {
    //   axios({
    //     method: 'get',
    //     url: 'https://api.uomg.com/api/rand.qinghua?format=json',
    //     params: {
    //       username: 'zs',
    //       age: 19,
    //       sex: 'male'
    //     }
    //   }).then((result) => {
    //     console.log(result.data.content);
    //   }).catch((err) => {
    //     console.log(err);
    //   });
    // }

    // randQingHua()

    // // setInterval(() => {
    // //   randQingHua()
    // }, 1000);

// -----------------------------------------------------------------------------------

    axios.get('https://api.uomg.com/api/rand.qinghua?format=json', {
      params: {
        username: 'zs',
        age: 19,
        sex: 'male'
      },
      headers: {
        Accept: 'application/json, text/plain, cc/lfl, */*'
      }
    }).then((result) => {
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });

  }
}
</script>

<style>

</style>
