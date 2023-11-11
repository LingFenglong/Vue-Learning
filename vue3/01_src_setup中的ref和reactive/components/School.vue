<template>
  <h3>学校名称：{{school.name}}</h3>
  <h3>学校地址：{{school.address}}</h3>
  <h3>学院：{{school.colleges}}</h3>
  <h3>学生：{{school.students}}</h3>
</template>

<script>
import {reactive, ref} from 'vue'

export default {
  name: 'School',
  setup() {
    // 非响应式
    // let name = 'hebnu'
    // let address = 'sjz'


    // 响应式
    // ref()    import {ref} from 'vue'
    // let name = ref('hebnu')
    // let address = ref('sjz')
    // let colleges = ['software', 'math', 'art', 'music']
    // let student = ref({
    //   name: 'zs',
    //   age: 20,
    //   sex: 'male'
    // })
    //
    // colleges[4] = '666'
    // student.value.name = 'lisi'
    //
    // name.value = 'sjzhebnu'

    // reactive    import {reactive} from 'vue'
    let school = reactive({
      name: 'hebnu',
      address: 'sjz',
      colleges: ['software', 'math', 'art', 'music'],
      students: [
        {
          name: 'zs',
          age: 20,
          sex: 'male'
        },
        {
          name: 'lisi',
          age: 22,
          sex: 'female'
        },{
          name: 'wangwu',
          age: 24,
          sex: 'female'
        }
      ]
    })

    return {
      school
    }
  }
}
</script>

<style scoped>

</style>