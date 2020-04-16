<template>
  <a-layout id="components-layout-demo-fixed" style="height: 100%">
    <a-layout-header class="header">
      <img src="../assets/logo.png" style="height: 50px;margin: auto 0" />
      <div style="margin-left: 60px">
        <a-input-search
          placeholder="搜寻喜欢的图书"
          style="width: 300px"
          size="default"
          @search="onSearch"
        />
      </div>
      <div>
        <a-menu
          v-model="current"
          mode="horizontal"
          style="line-height: 74px;margin-left: 100px"
          @click="clickMenu"
        >
          <a-menu-item key="BookMarketIndex">
            <a-icon type="home" />
            首页
          </a-menu-item>
          <a-menu-item key="ShoppingCard">
            <a-icon type="shopping-cart" />
            购物车
          </a-menu-item>
        </a-menu>
      </div>
      <div class="index_user">
        <a-avatar icon="user" class="index_avatar" />
        <a-dropdown>
          <a class="index_avatar_dropdown" @click="onClick">
            用户登录
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="1" v-if="isLogin">
              <router-link to="">详细信息</router-link>
            </a-menu-item>
            <a-menu-item key="2" v-if="isLogin">
              <router-link to="/login">退出登录</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0;min-height: fit-content">
      <router-view />
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "basicLayout",
  data() {
    return {
      current: ["bookMarket"],
      visible: false,
      isLogin: false
    };
  },
  beforeMount() {
    this.isLogin = this.$store.getters.getIsLogin;
  },
  components: {
    Footer
  },
  methods: {
    onSearch() {},
    onClick() {
      console.log("dainji");
      if (!this.isLogin) {
        this.$router.push({
          name: "login"
        });
      }
    },
    clickMenu(key) {
      this.$router.push({
        name: key.key
      });
    }
  }
};
</script>

<style>
.index_user {
  padding-right: 10px;
  line-height: 50px;
  display: flex;
  margin-left: auto;
}
.index_avatar {
  margin-right: 10px;
  align-self: center;
}
.index_avatar_dropdown {
  align-self: center;
}
.ant-layout-header {
  display: flex;
  background: white;
  line-height: 80px;
  height: 80px;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
