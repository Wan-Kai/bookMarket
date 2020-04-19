<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 3 }"
      :wrapper-col="{ span: 8 }"
      @submit="handleSubmit"
    >
      <a-form-item label="电话号码" style="margin-bottom: 12px">
        <a-input
          v-decorator="[
            'phone',
            {
              rules: [{ required: true, message: '请填写电话号码！' }],
              initialValue: this.phone
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="昵称" style="margin-bottom: 12px">
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: '请填写姓名！' }],
              initialValue: this.name
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="性别" style="margin-bottom: 12px">
        <a-cascader
          v-decorator="[
            'sex',
            {
              initialValue: this.sex,
              rules: [{ required: true, message: '请选择性别！' }]
            }
          ]"
          :options="sex_options"
          placeholder="请选择性别"
        />
      </a-form-item>
      <a-form-item label="简介" style="margin-bottom: 12px">
        <a-textarea
          placeholder="请填写个人简介"
          :autoSize="{ minRows: 4, maxRows: 6 }"
          v-decorator="[
            'intro',
            {
              rules: [{ required: true, message: '请填写个人简介!' }],
              initialValue: this.intro
            }
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 3 }">
        <a-button type="primary" html-type="submit">
          确认修改
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
const sex_options = [
  {
    label: "男",
    value: 1
  },
  {
    label: "女",
    value: 0
  }
];
import ATextarea from "ant-design-vue/es/input/TextArea";
export default {
  name: "userEdit",
  inject: ["reload"],
  components: { ATextarea },
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),

      sex_options,
      name: "",
      intro: "",
      avatar: "",
      phone: "",
      sex: [],
      itemSex: "",
      userName: "",
      weChatName: ""
    };
  },
  beforeMount() {
    this.$api.user
      .userInfo({})
      .then(res => {
        if (res.data.code === 200) {
          let infoDataTemp = res.data.data.userInfo;

          this.name = infoDataTemp.name;
          this.intro = infoDataTemp.intro;
          this.avatar = infoDataTemp.avatar;
          this.phone = infoDataTemp.phone;
          this.sex.push(parseInt(infoDataTemp.sex));
          this.userName = infoDataTemp.userName;
          this.weChatName = infoDataTemp.weChatName;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          let sentData = {};
          sentData.name = values.name;
          sentData.intro = values.intro;
          sentData.phone = values.phone;
          sentData.userName = values.userName;
          sentData.weChatName = values.weChatName;
          sentData.sex = values.sex[0];

          console.log(sentData);

          this.$api.user
            .editUserInfo(sentData)
            .then(res => {
              console.log(res);
              if (res.data.code === 200) {
                this.reload();
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    handleChange(value) {
      this.itemSex = value;
    }
  }
};
</script>

<style scoped></style>
