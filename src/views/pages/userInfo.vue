<template>
  <a-layout class="book_user_content">
    <a-spin v-if="!dataReady" style="margin-top: 100px" />
    <div v-if="dataReady">
      <div class="book_user_hint">
        <p class="book_user_hint_p">用户详情</p>
      </div>
      <div style="max-width: 1140px;width: 1140px;margin: 30px auto">
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="用户详情" key="1"><UserInfo /></a-tab-pane>
          <a-tab-pane tab="修改信息" key="2" forceRender
            ><UserEdit
          /></a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </a-layout>
</template>

<script>
import UserInfo from "./user/userInfo";
import UserEdit from "./user/userEdit";

export default {
  name: "userInfo",
  components: {
    UserInfo,
    UserEdit
  },
  data() {
    return {
      dataReady: true
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
};
</script>

<style scoped>
.book_user_content {
  background: #fff;
  padding: 0;
  height: fit-content;
  display: flex;
  min-height: 100%;
}
.book_user_hint {
  height: 50px;
  background: #24936e;
  text-align: center;
}
.book_user_hint_p {
  font-size: 24px;
  font-weight: bold;
  color: white;
  line-height: 50px;
  letter-spacing: 2px;
}
</style>
