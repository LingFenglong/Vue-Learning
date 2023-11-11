export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf('王') !== 0) {
        alert('必须是王姓')
      } else {
        context.commit('ADD_PERSON', value)
      }
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutation add person', state, value)
      state.people.unshift(value)
    }
  },
  state: {
    people: [
      {id: 1, name: 'zhangsan', sex: 'male'}
    ]
  },
  getters: {
    getFirstPersonName(state) {
      return state.people[0].name
    }
  }
}