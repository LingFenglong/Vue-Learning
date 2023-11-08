<template>
  <div>
    <h1>PersonList</h1>
    <button @click="addPerson">添加一个人</button>
    <ul>
      <li v-for="person in $store.state.people" :key="person.id">{{person.id}}  {{person.name}}  {{person.sex}}</li>
    </ul>
    <h3 style="color: red">Count求和为：{{$store.state.num}}</h3>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: 'Person',
  methods: {
    addPerson() {
      this.$store.commit('ADD_PERSON', {
        id: nanoid(), name: 'lisi', sex: 'female'
      })
    }
  }
}
</script>

<style scoped>

</style>