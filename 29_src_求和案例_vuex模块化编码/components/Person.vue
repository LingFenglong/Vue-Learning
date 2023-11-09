<template>
  <div>
    <h1>PersonList</h1>
    <button @click="addPerson">添加一个人</button>
    <button @click="addPersonWang">添加一个王姓人</button>
    <h3>第一个人的姓名为：{{$store.getters["personAbout/getFirstPersonName"]}}</h3>
    <ul>
      <li v-for="person in $store.state.personAbout.people" :key="person.id">{{person.id}}  {{person.name}}  {{person.sex}}</li>
    </ul>
    <h3 style="color: red">Count求和为：{{$store.state.countAbout.num}}</h3>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'Person',
  methods: {
    addPerson() {
      this.$store.commit('personAbout/ADD_PERSON', {
        id: nanoid(), name: 'lisi', sex: 'female'
      })
    },
    addPersonWang() {
      this.$store.dispatch('personAbout/addPersonWang', {
        id: nanoid(), name: '王', sex: 'female'
      })
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>