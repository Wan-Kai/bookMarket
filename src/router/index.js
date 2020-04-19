import Vue from "vue";
import VueRouter from "vue-router";
import findLast from "lodash/findLast";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { check } from "../util/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    hideInMenu: true,
    meta: { authority: ["user", "guest"] },
    component: () =>
      import(/* webpackChunkName: "user" */ "../layout/BlackLayout.vue"),
    children: [
      //login
      {
        path: "/login",
        name: "login",
        meta: { title: "登录" },
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/login/login.vue")
      },
      {
        path: "/register",
        name: "register",
        meta: { title: "注册" },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/login/register.vue"
          )
      }
    ]
  },
  {
    path: "/",
    hideInMenu: true,
    meta: { authority: ["user"] },
    component: () =>
      import(/* webpackChunkName: "user" */ "../layout/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/bookMarket/index"
      },
      {
        path: "/bookMarket/index",
        name: "BookMarketIndex",
        meta: { title: "首页", authority: ["user"] },
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/pages/index.vue")
      },
      {
        path: "/bookMarket/detail",
        name: "BookDetail",
        meta: { title: "书籍详情", authority: ["user"] },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/pages/bookDetail.vue"
          )
      },
      {
        path: "/bookMarket/user",
        name: "UserDetail",
        meta: { title: "用户详情", authority: ["user"] },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/pages/userInfo.vue"
          )
      },
      {
        path: "/bookMarket/shoppingCard",
        name: "ShoppingCard",
        meta: { title: "购物车", authority: ["user"] },
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/pages/shoppingCard.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (to.path !== "/login") {
      next({
        path: "/login"
      });
    }
    NProgress.done();
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
