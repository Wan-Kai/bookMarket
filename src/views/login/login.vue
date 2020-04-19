<template>
  <a-layout class="book_login">
    <a-card class="book_login_card" :bordered="true" :hoverable="true">
      <div class="book_login_card_title_layout">
        <a class="book_login_card_title">登 录</a>
      </div>
      <div class="book_login_card_form_layout">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
        >
          <a-form-item style="margin-bottom: 6px">
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                }
              ]"
              placeholder="用户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item style="margin-bottom: 18px">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                }
              ]"
              type="password"
              placeholder="密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <span style="float: right">
            没有账号，<a @click="toRegister">现在注册</a>
          </span>
          <a-button
            type="primary"
            @click="handleSubmit"
            class="login-form-button"
          >
            登录
          </a-button>
        </a-form>
      </div>
    </a-card>
  </a-layout>
</template>

<script>
export default {
  name: "login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);

          this.$api.login
            .login({
              username: values.userName,
              password: values.password
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("登录成功", 2);
                let sessionKey = res.data.data["X-Auth-Token"];
                this.$store.commit("login/setSessionKey", sessionKey);
                this.$store.commit("login/setUsername", values.userName);
                this.$store.commit("login/setLogin", "user");
                setTimeout(() => {
                  this.$router.push({
                    name: "BookMarketIndex"
                  });
                }, 200);
              } else {
                this.$message.error(res.data.message);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    toRegister() {
      this.$router.push({
        name: "register"
      });
    },
    enterOfGuest() {
      this.$router.push({
        name: "BookMarketIndex"
      });
    }
  }
};
</script>

<style scoped>
.book_login {
  padding: 0;
  height: fit-content;
}
.book_login_card {
  margin: 160px auto;
  width: 486px;
}
.book_login_card_title_layout {
  height: 40px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
}
.book_login_card_title {
  font-size: 26px;
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
}
.book_login_card_form_layout {
  width: 80%;
  margin: 24px auto 0px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
/deep/.ant-card-body {
  padding: 0;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  margin-bottom: 48px;
  margin-top: 20px;
}
</style>
