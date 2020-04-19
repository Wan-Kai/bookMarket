// 引入 axios 封装方法
import { get, post, login, deletes } from "./axios";

export default {
  login: {
    login: data => {
      return login("/login", data);
    },
    checkUsername: data => {
      return get("/checkUserName", data);
    },
    register: data => {
      return login("/register", data);
    }
  },
  index: {
    indexBooks: data => {
      return get("/getItemList", data);
    }
    // indexBooks: data => {
    //   return get("/indexBooks", data);
    // }
  },
  other: {
    indexBooks: data => {
      return post("/indexBooks", data);
    }
  },
  shoppingCard: {
    shoppingDetail: data => {
      return get("/reserve", data);
    },
    addBook: data => {
      return post("/reserve", data);
    },
    deletesBook: data => {
      return deletes("/reserve", data);
    }
  }
};
