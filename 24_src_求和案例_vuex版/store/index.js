import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
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
}

//准备mutations——用于操作数据（state）
const mutations = {
  ADD(state, value) {
    console.log('mutation add', state, value)
    state.num += value
  },
  SUB(state, value) {
    console.log('mutation sub', state, value)
    state.num -= value
  }
}

//准备state——用于存储数据
const state = {
    num: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})