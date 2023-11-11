<template>
  <div>
    <h1>当前求和为：{{num}}</h1>
    <h3>和的10倍为：{{bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数时++</button>
    <button @click="incrementWait(n)">等一等++</button>
    <br/>
    <h3 style="color: red">Person人数为：{{$store.state.people.length}}</h3>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'Count',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    // ...mapState({num: 'num'})
    ...mapState(['num']),
    // ...mapGetters({bigSum: 'bigSum'})
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
    ...mapMutations({increment: 'ADD', decrement: 'SUB'}),

    // incrementOdd() {
    //   invoke $store.dispatch.addOdd
    // }
  }
}
</script>

<style scoped>
  button {
    margin-left: 8px;
  }
</style>