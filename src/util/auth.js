import store from "../store";

export function getCurrentAuthority() {
  const user = [];
  user.push(store.getters.getLoginState);
  return user;
}

export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}
//
// export function isLogin() {
//     if (getLoginState() === "1") {
//         return true;
//     }
//     return false;
// }
