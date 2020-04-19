<template>
  <a-layout class="book_register">
    <a-card class="book_register_card" :bordered="true" :hoverable="true">
      <div class="book_register_card_title_layout">
        <a class="book_register_card_title">注 册</a>
      </div>
      <div class="book_register_card_form_layout">
        <a-form
          id="components-form-demo-normal-register"
          :form="form"
          class="register-form"
        >
          <a-form-item style="margin-bottom: 6px">
            <a-input
              v-decorator="[
                'phone',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入正确的手机号码!',
                      pattern: /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
                    }
                  ]
                }
              ]"
              placeholder="手机号"
            >
              <a-icon
                slot="prefix"
                type="phone"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item style="margin-bottom: 6px">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: '请输入您的姓名!' }]
                }
              ]"
              placeholder="姓名"
            >
              <a-icon
                slot="prefix"
                type="crown"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item style="margin-bottom: 6px">
            <a-input
              style="width: 70%"
              v-decorator="[
                'userName',
                {
                  rules: [{ required: true, message: '请输入您的用户名!' }]
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
            <a-button type="dashed" style="width: 30%" @click="checkForUsername"
              >检查可用</a-button
            >
          </a-form-item>
          <a-form-item style="margin-bottom: 18px">
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [{ required: true, message: '请输入您的密码!' }]
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
          <span style="float: right"
            >已有账号，<a @click="tologin">立即登录</a></span
          >
          <a-button
            type="primary"
            @click="handleSubmit"
            class="register-form-button"
          >
            注册
          </a-button>
        </a-form>
      </div>
    </a-card>
  </a-layout>
</template>

<script>
export default {
  name: "register",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$api.login
            .register({
              username: values.userName,
              password: values.password,
              name: values.name,
              phone: values.phone
            })
            .then(res => {
              console.log(res);
              if (res.data.code === 200) {
                this.$message.success("注册成功", 2);
                this.$router.push({
                  name: "login"
                });
              } else {
                this.$message.error(res.data.message, 2);
              }
            });
        }
      });
    },
    checkForUsername() {
      let username = this.form.getFieldValue("userName");

      if (username) {
        this.$api.login
          .checkUsername({
            username: username
          })
          .then(res => {
            console.log(res);
            if (res.data.code === 200) {
              this.$message.success("该用户名可用", 2);
            } else {
              this.$message.error("很遗憾，该用户名不可用", 2);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message.error("请先输入用户名", 2);
      }
    },
    tologin() {
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>

<style scoped>
.book_register {
  padding: 0;
  height: fit-content;
}
.book_register_card {
  margin: 160px auto;
  width: 486px;
}
.book_register_card_title_layout {
  height: 40px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
}
.book_register_card_title {
  font-size: 26px;
  color: black;
  letter-spacing: 2px;
  font-weight: bold;
}
.book_register_card_form_layout {
  width: 80%;
  margin: 24px auto 0px;
}
/deep/.ant-card-body {
  padding: 0;
}
#components-form-demo-normal-register .register-form {
  max-width: 300px;
}
#components-form-demo-normal-register .register-form-forgot {
  float: right;
}
#components-form-demo-normal-register .register-form-button {
  width: 100%;
  margin-bottom: 48px;
  margin-top: 20px;
}
</style>
