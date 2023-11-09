export default {
  namespaced: true,
  actions: {
    add(context, value) {
      console.log('action add', context, value)
      context.commit('ADD', value)
    },
    sub(context, value) {
      console.log('action sub', context, value)
      context.commit('SUB', value)
    },
    addOdd(context, value) {
      console.log('action addOdd', context, value)
      if (context.state.num % 2) {
        context.commit('ADD', value)
      }
    },
    addWait(context, value) {
      console.log('action addWait', context, value)
      setTimeout(() => {
        context.commit('ADD', value)
      }, 500)
    }
  },
  mutations: {
    ADD(state, value) {
      console.log('mutation add', state, value)
      state.num += value
    },
    SUB(state, value) {
      console.log('mutation sub', state, value)
      state.num -= value
    }
  },
  state: {
    num: 0
  },
  getters: {
    bigSum(state) {
      console.log('getters state', state)
      return state.num * 10
    }
  }
}