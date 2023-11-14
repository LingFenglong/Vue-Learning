const axios = require("axios");

const p = new Promise((resolve,reject)=> {
  setTimeout(()=> {
    resolve(axios.get('https://jsonplaceholder.typicode.com/comments').then(
      result => {
        console.log(result.data)
      },
      error => {
        console.log(error.message)
      }))
  },1000)
}).then(res => {
  console.log(res) //1秒后打印123
})
