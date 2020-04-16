// 引入 axios 封装方法
import { get } from "./axios";

export default {
  shoppingCard: {
    shoppingDetail: data => {
      return get("/shoppingDetail", data);
    }
  }
};
