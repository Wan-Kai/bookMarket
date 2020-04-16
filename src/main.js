import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "core-js/stable";
import "regenerator-runtime/runtime";

require("./mock/mock");

import {
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
  Checkbox
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
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
