import axios from "axios"; // 引入axios
import store from "../store";

// 环境的切换
if (process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "https://xgame.minizhi.cn/api";
} else if (process.env.NODE_ENV === "debug") {
  axios.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "/api";
}

// 项目地址加端口
export const base = axios.defaults.baseURL;

// 创建实例
const service = axios.create({
  timeout: 10000
});

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers["Access-Control-Allow-Origin"] = "https://xgame.minizhi.cn";
    config.headers["Access-Control-Allow-Headers"] =
      "Accept, Origin, XRequestedWith, Content-Type, LastModified";
    config.headers["Access-Control-Allow-Methods"] =
      "PUT,POST,GET,DELETE,OPTIONS";
    config.withCredentials = false;

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

//login
export function login(url, data = {}) {
  //用form data传输
  let form = new FormData();
  let keys = Object.keys(data);
  keys.forEach(key => {
    form.append(key, data[key]);
  });
  let sendObject = {
    url: url,
    method: "post",
    headers: {},
    data: form
  };
  //sendObject.data=JSON.stringify(data);
  return service(sendObject).catch(() => {});
}

//get方法
export function get(url, data = {}) {
  let sendObject = {
    url: url,
    method: "get",
    params: data,
    headers: {
      "X-Auth-Token": store.getters.getSessionKey
    }
  };
  // sendObject.data=JSON.stringify(data);
  console.log(store.getters.getSessionKey);
  return service(sendObject).catch(() => {});
}

//封装post请求
export function post(url, data = {}) {
  //默认配置
  let sendObject = {
    url: url,
    method: "post",
    params: data,
    headers: {
      "X-Auth-Token": store.getters.getSessionKey
    }
  };
  // sendObject.data=JSON.stringify(data);
  console.log(store.getters.getSessionKey);
  return service(sendObject).catch(() => {});
}

//封装put方法
export function put(url, data = {}) {
  return service({
    url: url,
    method: "put",
    params: data,
    headers: {
      "X-Auth-Token": store.getters.getSessionKey
    }
  });
}

//删除方法(resfulAPI常用)
export function deletes(url, data = {}) {
  let sendObject = {
    url: url,
    method: "delete",
    params: data,
    headers: {
      "X-Auth-Token": store.getters.getSessionKey
    }
  };
  // sendObject.data=JSON.stringify(data);
  return service(sendObject).catch(() => {});
}
