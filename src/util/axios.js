import axios from "axios"; // 引入axios

// 环境的切换
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "debug") {
  axios.defaults.baseURL = "/pro";
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "/pro";
}

// 项目地址加端口
export const base = axios.defaults.baseURL;

// 创建实例
const service = axios.create({
  timeout: 10000
});

// request拦截器
// Authorization已在各请求体封装，无需再统一声明
service.interceptors.request.use(
  config => {
    // config.headers["Access-Control-Allow-Origin"] = "*";
    // config.headers["Access-Control-Allow-Headers"] =
    //   "Accept, Origin, XRequestedWith, Content-Type, LastModified";
    // config.headers["Access-Control-Allow-Methods"] =
    //   "PUT,POST,GET,DELETE,OPTIONS";
    // config.changeOrigin = true;
    // config.supportsCredentials = true;

    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// response 拦截器
service.interceptors.response.use(
  response => {
    let res = {};
    // res.status = response.status;
    // res.data = response.data;
    res = response;
    return res;
  },
  error => {
    // if (error.response && error.response.status === 404) {
    //   this.$router.push({ path: "/404" });
    // } else if (error.response && error.response.status === 403) {
    //   this.$store.commit("login/reset");
    //   alert("登录失效，请重新登录！");
    //   this.$router.push({ path: "/user/login" });
    // }
    // return Promise.reject(error.response);
    return Promise.resolve(error.response);
  }
);

//get方法
export function get(url, data = {}) {
  data.IERealTime = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  let sendObject = {
    url: url,
    method: "get",
    params: data,
    headers: {}
  };
  // sendObject.data=JSON.stringify(data);
  return service(sendObject).catch(() => {});
}

//封装post请求
export function post(url, data = {}) {
  //默认配置
  let sendObject = {
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: data
  };
  // sendObject.data=JSON.stringify(data);
  return service(sendObject).catch(() => {});
}

//封装put方法
export function put(url, data = {}) {
  return service({
    url: url,
    method: "put",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: JSON.stringify(data)
  });
}

//删除方法(resfulAPI常用)
export function deletes(url, data = {}) {
  let sendObject = {
    url: url,
    method: "delete",
    headers: {},
    data: JSON.stringify(data)
  };
  // sendObject.data=JSON.stringify(data);
  return service(sendObject).catch(() => {});
}
