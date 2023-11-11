export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('挂载成功！' + this);
  }
}