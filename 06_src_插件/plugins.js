export default {
  install(Vue) {
    Vue.directive('random-big', (element, binding) => {
      element.innerHTML = binding.value * Math.random() * 10
      // *bind  inserted  *update
    })

    Vue.filter('sliceStr', (val, length = 4) => {
      // val传入管道的值，带有默认值形式参数
      if (val.length <= length) return val

      return val.slice(0, length)
    })

    Vue.mixin({
      // 混入
      methods: {
        showName() {
          alert(this.name)
        }
      },
      data() {
        return {
          mixinFlag: true
        }
      }
    })
  }
}