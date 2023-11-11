<template>
  <div>
    <h1>当前求和为：{{num}}</h1>
    <h3>和的10倍为：{{bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数时++</button>
    <button @click="incrementWait">等一等++</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

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
    increment() {
      // 进行dispatch
      this.$store.dispatch('add', this.n)
    },
    decrement() {
      // 越过dispatch 直接commit
      this.$store.commit('SUB', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 8px;
  }
</style>