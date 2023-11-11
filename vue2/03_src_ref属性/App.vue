<template>
  <div>
    <h1 ref="h">学Vue</h1>
    <School ref="sch"></School>
    <button @click="showInfo" ref="btn">点我显示信息</button>
  </div>
</template>

<script>
  import School from './components/School'

  export default {
    name: 'App',
    components: {
      School
    },
    methods: {
      showInfo() {
        console.log(this.$refs.h);
        console.log(this.$refs.sch);
        console.log(this.$refs.btn);
      }
    }
  }
</script>