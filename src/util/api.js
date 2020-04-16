// 引入 axios 封装方法
import { get } from "./axios";

export default {
  index: {
    indexBooks: data => {
      return get("/indexBooks", data);
    }
  },
  shoppingCard: {
    shoppingDetail: data => {
      return get("/shoppingDetail", data);
    }
  }
};
