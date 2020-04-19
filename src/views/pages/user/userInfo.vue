<template>
  <div>
    <a-descriptions bordered>
      <a-descriptions-item label="用户名">{{ username }}</a-descriptions-item>
      <a-descriptions-item label="性别">{{ sex }}</a-descriptions-item>
      <a-descriptions-item label="电话号码">{{ phone }}</a-descriptions-item>
      <a-descriptions-item label="昵称">{{ name }}</a-descriptions-item>
      <a-descriptions-item label="简介">
        {{ intro }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      name: "",
      intro: "",
      authorities: "",
      avatar: "",
      phone: "",
      sex: "",
      username: "",
      weChatName: ""
    };
  },
  beforeMount() {
    this.$api.user
      .userInfo({})
      .then(res => {
        console.log(res);
        if (res.data.code === 200) {
          let infoDataTemp = res.data.data.userInfo;
          this.name = infoDataTemp.name;
          this.intro = infoDataTemp.intro;
          this.authorities = infoDataTemp.authorities;
          this.avatar = infoDataTemp.avatar;
          this.phone = infoDataTemp.phone;
          this.sex = infoDataTemp.sex === 1 ? "男" : "女";
          this.username = infoDataTemp.username;
          this.weChatName = infoDataTemp.weChatName;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
