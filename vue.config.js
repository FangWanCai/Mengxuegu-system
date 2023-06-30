const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  devServer: {
    // 端口号
    port: 8989,

    // 主机名
    host: 'localhost',

    // 是否自动开启浏览器
    open: true,

    // 是否开启https
    https: false,

    // 配置跨域
    proxy: {
      // 代理名称
      [process.env.VUE_APP_BASE_API]: {
        // 跨域地址
        target: VUE_APP_SERVICE_URL,

        // 开启跨域
        changeOrigin: true,

        // 重写路径
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
});
