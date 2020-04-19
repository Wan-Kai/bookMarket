module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#24936E",
          "link-color": "#24936E",
          "border-radius-base": "2px"
        },
        javascriptEnabled: true
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  }
  // devServer: {
  //   host: "localhost",
  //   port: 8080, // 端口号
  //   https: false, // https:{type:Boolean}
  //   open: true, //配置自动启动浏览器
  //
  //   // 配置多个代理
  //   proxy: {
  //     "/api": {
  //       target: "https://xgame.minizhi.cn", // 要访问的接口域名
  //       ws: true, // 是否启用websockets
  //       changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       pathRewrite: {
  //         "^/api": "/api"
  //       }
  //     }
  //   }
  // }
};
