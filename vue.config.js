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
    https: false
  }
});
