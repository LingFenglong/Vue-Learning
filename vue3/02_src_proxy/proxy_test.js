// defineProperty

// const person = {
//   name: 'zs'
// }
//
// const p = {}
//
// Object.defineProperty(p, 'name', {
//   get() {
//     console.log('get的钩子函数')
//     return person.name
//   },
//   set(newVal) {
//     console.log(`set的钩子函数：${newVal}`)
//     person.name = newVal
//   }
// })
//
// console.log(p.name);
// p.name = 'ls'

// ---------------------------------------------------------------

// Proxy
const person = {
  name: 'zs'
}

const p = new Proxy(person, {
  get(target, prop) {
    console.log('get的钩子函数')
    return Reflect.get(target, prop)
  },
  set(target, prop, value) {
    console.log(`set的钩子函数`)
    return Reflect.set(target, prop, value)
  },
  deleteProperty(target, prop) {
    console.log(`delete的钩子函数`)
    return Reflect.deleteProperty(target, prop)
  }
})

console.log(p.name)
p.name = 'haha'
p.sex = 'male'  // set的钩子函数
delete p.sex
