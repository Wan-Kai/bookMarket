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
        <a-avatar :src="avatar" class="index_avatar" />
        <a-dropdown>
          <a class="index_avatar_dropdown" @click="onClick">
            {{ username }}<a-icon type="down" v-if="isLogin" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="1" v-if="isLogin">
              <span @click="userInfo">用户信息</span>
            </a-menu-item>
            <a-menu-item key="2" v-if="isLogin">
              <span @click="exitLogin">退出登录</span>
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
  inject: ["reload"],
  data() {
    return {
      current: ["bookMarket"],
      visible: false,
      isLogin: false,
      avatar: "",
      username: "用户登录"
    };
  },
  beforeMount() {
    let baseUrl = this.$store.getters.getBaseUrl.toString();
    this.isLogin = this.$store.getters.getIsLogin;
    if (this.isLogin) {
      this.username = this.$store.getters.getUsername;
      this.avatar = baseUrl + this.$store.getters.getAvatar;
      console.log(this.avatar);
      console.log(this.$store.getters.getAvatar);
    }
  },
  components: {
    Footer
  },
  methods: {
    onSearch(name) {
      console.log(name);
      this.$api.index
        .indexBooks({
          start: 0,
          itemNameChi: name
        })
        .then(res => {
          if (res.data.code === 200) {
            let bookList = res.data.data.list;
            console.log(bookList);
            this.$router.push({
              name: "BookDetail",
              query: { id: bookList[0].itemId, name: bookList[0].itemNameChi }
            });
            this.reload();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClick() {
      if (!this.isLogin) {
        this.$router.push({
          name: "login"
        });
      }
    },
    exitLogin() {
      this.$store.commit("login/setLogin", "guest");
      this.$store.commit("login/setSessionKey", "");
      this.$router.push({
        name: "login"
      });
    },
    clickMenu(key) {
      if (key.key === "ShoppingCard" && !this.isLogin) {
        this.$message.error("请先登录");
      }
      this.$router.push({
        name: key.key
      });
    },
    userInfo() {
      this.$router.push({
        name: "UserDetail"
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
