<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="emitCC">触发cc事件</button>
    <button @click="onCC">绑定cc事件</button>
    <button @click="offCC">解绑cc事件</button>
    <button @click="death">销毁student组件</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'zs',
        age: 18
      }
    },
    methods: {
      emitCC() {
        this.$emit('cc', this.name);
      },
      onCC() {
        this.$on('cc', () => console.log('事件已绑定'))
      },
      offCC() {
        this.$off('cc')
        // this.$off(['aa', 'cc'])  // 批量解绑
        // this.$off()  // 解绑所有
      },
      death() {
        this.$destroy()
      }
    }
  }
</script>

<style>
  .student {
    background-color: antiquewhite;
    color: rgb(45, 86, 198);
  }
</style>