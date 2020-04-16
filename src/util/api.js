// 引入 axios 封装方法
import { get } from "./axios";

export default {
  index: {
    mapMarkers: data => {
      return get("/index/mapMarkers", data);
    },
    message: data => {
      return get("/index/message", data);
    }
  }
};
