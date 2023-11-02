const { defineConfig } = require('@vue/cli-service')

// commons的语法
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 关闭语法检查
})
