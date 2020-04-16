import mock from "mockjs";
import * as index from "./index";

// function getParams(url, paramName) {
//   let paramString = url.toString().split("?")[1];
//   paramString = paramString + "&extra=null";
//   let params = paramString.split("&");
//   for (let i = 0; i < params.length; i++) {
//     let paramItem = params[i].split("=");
//     if (paramItem[0] === paramName) {
//       return paramItem[1];
//     }
//   }
// }
// mock.mock(`/api/internal/login`, "post", () => {
//   return login.userInfo;
// });

//index
mock.mock(`/api/admin/server/message`, "post", () => {
  return index.mapMarkers;
});
