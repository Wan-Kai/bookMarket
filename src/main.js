import Vue from "vue";
import App from "./App.vue";
import API from "./util/api";
import router from "./router";
import store from "./store";
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  message,
  Button,
  Layout,
  Menu,
  Table,
  Avatar,
  Icon,
  Breadcrumb,
  Carousel,
  Input,
  Dropdown,
  Row,
  Col,
  Card,
  Divider,
  Form,
  Checkbox,
  Empty,
  Tooltip,
  Spin,
  List,
  Comment,
  Tabs,
  Descriptions,
  Cascader
} from "ant-design-vue";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Table);
Vue.use(Avatar);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Carousel);
Vue.use(Input);
Vue.use(Dropdown);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Form);
Vue.use(Checkbox);
Vue.use(Empty);
Vue.use(Tooltip);
Vue.use(Spin);
Vue.use(List);
Vue.use(Comment);
Vue.use(Tabs);
Vue.use(Descriptions);
Vue.use(Cascader);
Vue.config.productionTip = false;
Vue.prototype.$api = API;
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
