const { defineConfig } = require('@vue/cli-service')

// commons的语法
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  //开启代理服务器（方式一）
  /* devServer: {
  proxy: 'http://localhost:5000'
  }, */
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api/student': {
        target: 'http://localhost:5000',
				pathRewrite:{'^/api/student' : ''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      '/api/car': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/api/car' : ''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
