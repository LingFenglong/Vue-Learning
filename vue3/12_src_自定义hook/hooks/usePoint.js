import {onMounted, onUnmounted, reactive} from "vue";

export default () => {
  let point = reactive({
    x: 0,
    y: 0
  })

  // 回调的钩子方法
  const savePoint = (event) => {
    point.x = event.pageX
    point.y = event.pageY
    console.log(point.x, point.y)
  }

  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}