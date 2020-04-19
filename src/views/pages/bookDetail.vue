<template>
  <a-layout class="book_index_content">
    <a-spin v-if="!dataReady" style="margin-top: 100px" />
    <div v-if="dataReady">
      <div class="book_bookDetail_hint">
        <p class="book_bookDetail_hint_p">书籍详情</p>
      </div>
      <div style="max-width: 1140px;width: 1140px;margin: 30px auto">
        <p style="font-size: 24px;font-weight: bold">
          {{ itemNameChi }}
        </p>
        <a-row :gutter="16">
          <a-col :span="4">
            <img :src="itemCover" style="width: 100%" />
          </a-col>
          <a-col :span="6">
            <p style="margin-bottom: 5px;color: black">
              外文书名：
              <span>{{ itemNameEng }}</span>
            </p>
            <p style="margin-bottom: 5px;color: black">
              价格：
              <i
                class="iconfont icon-renminbi1"
                style="color: #42b983;font-size: 12px;"
              ></i>
              <span>{{ itemPrice }}</span>
            </p>
            <p style="margin-bottom: 5px;color: black">
              ISBN：
              <span>{{ itemISBN }}</span>
            </p>
            <p style="margin-bottom: 5px;color: black">
              库存：
              <span>{{ itemStack }}</span>
            </p>
            <p style="margin-bottom: 5px;color: black">
              标签：
              <a-tooltip v-for="item in tagInfos" :key="item.tagName">
                <template slot="title">
                  {{ item.tagIntro }}
                </template>
                <span style="color: #42b983;margin-left: 5px">{{
                  item.tagName
                }}</span>
              </a-tooltip>
            </p>
            <a-button
              size="small"
              style="margin-top: 10px"
              @click="addToShoppingCard"
              >添加至购物车</a-button
            >
          </a-col>
          <a-col :span="10">
            <p style="margin-bottom: 5px;color: black">
              书籍简介：
            </p>

            <p style="text-indent:2em">{{ itemIntro }}</p>
          </a-col>
        </a-row>
      </div>
    </div>
    <a-spin v-if="!commentReady" style="margin-top: 100px" />
    <div
      v-if="commentReady"
      style="max-width: 1140px;width: 1140px;margin: 30px auto"
    >
      <div style="height: fit-content;margin-top: 50px;text-align: left">
        <span style="font-size: 16px;color: #42b983">短评</span>
        <a
          style="margin-left: 10px;font-size: 8px"
          @click="showTextarea = !showTextarea"
          >来评论一下...</a
        >
        <a-form :form="form" style="margin: 0" v-if="showTextarea">
          <a-form-item style="margin: 0">
            <a-textarea
              :rows="4"
              placeholder="我也来说两句"
              style="margin: 10px 0"
              v-decorator="[
                'comment',
                {
                  rules: [{ required: true, message: '请填写评论!' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item style="margin: 0">
            <a-button
              style="float: right;margin-bottom: 10px"
              type="primary"
              @click="tip"
              >提交</a-button
            >
          </a-form-item>
        </a-form>
      </div>
      <div>
        <a-divider style="margin-top: 10px" />
        <div v-for="item in commentList" :key="item.commentId">
          <a-avatar :src="item.url" />
          <span style="margin-bottom: 5px;color: #0086b3">
            {{ item.userNickName
            }}<span style="margin-left: 20px;color: grey"></span>
          </span>
          <p style="font-size: 13px;margin-top: 8px;text-indent:2em">
            {{ item.comment }}
          </p>
          <a-divider dashed style="margin-top: 10px" />
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
import AFormItem from "ant-design-vue/es/form/FormItem";
export default {
  name: "bookDetail",
  components: { AFormItem, ACol, ARow },
  inject: ["reload"],
  data() {
    this.form = this.$form.createForm(this);
    return {
      id: "",
      name: "",

      itemNameChi: "",
      itemNameEng: "",
      itemCover: "",
      itemIntro: "",
      itemAuthor: "",
      itemPrice: "",
      itemISBN: "",
      itemStack: "",
      tagInfos: [],

      commentList: [],
      dataReady: false,
      commentReady: false,
      showTextarea: false
    };
  },
  beforeMount() {
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    let baseUrl = this.$store.getters.getBaseUrl.toString();

    this.$api.index
      .indexBooks({
        start: 0,
        itemNameChi: this.name
      })
      .then(res => {
        if (res.data.code === 200) {
          let bookList = res.data.data.list;
          let getComment = "";
          for (let i = 0; i < bookList.length; i++) {
            this.itemNameChi = bookList[i].itemNameChi;
            this.itemNameEng = bookList[i].itemNameEng;
            this.itemCover = baseUrl + bookList[i].itemCover;
            getComment = bookList[i].itemIntro; //简介
            this.itemAuthor = bookList[i].itemAuthor;
            this.itemPrice = bookList[i].itemPrice;
            this.itemISBN = bookList[i].itemISBN;
            this.itemStack = bookList[i].itemStack;
            this.tagInfos = bookList[i].tagInfos;
          }
          this.itemIntro = "";
          const zeroOrMoreOsRegex = />+[^<]+</gi;
          let commentList = getComment.match(zeroOrMoreOsRegex);
          commentList.forEach(item => {
            this.itemIntro += item.substring(1, item.length - 1);
          });
        } else {
          this.$message.error("查询失败");
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.dataReady = true;
      });

    this.$api.book
      .comment({
        start: 0,
        itemId: this.id
      })
      .then(res => {
        if (res.data.code === 200) {
          this.commentList = res.data.data.list;
          this.commentList.forEach(item => {
            item.url = baseUrl + item.avatar;
          });
        } else {
          this.$message.error("获取用户评论失败");
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.commentReady = true;
      });
  },
  methods: {
    addToShoppingCard() {
      this.$api.shoppingCard
        .addBook({
          itemId: this.id
        })
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            this.$message.success("添加至购物车成功!");
          } else if (res.data.code === 400) {
            this.$message.error("这本书已经添加至购物车，请勿重复添加!");
          } else {
            this.$message.error("添加至购物车失败!");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    tip() {
      this.form.validateFields((err, value) => {
        if (!err) {
          this.$api.book
            .createComment({
              itemId: this.id,
              comment: value.comment
            })
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success("发表成功！");
              } else {
                this.$message.error("发表失败！");
              }
            })
            .catch(err => {
              console.log(err);
            })
            .finally(() => {
              this.showTextarea = false;
              this.reload();
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.book_index_content {
  background: #fff;
  padding: 0;
  height: fit-content;
  display: flex;
  min-height: 100%;
}
.book_bookDetail_hint {
  height: 50px;
  background: #24936e;
  text-align: center;
}
.book_bookDetail_hint_p {
  font-size: 24px;
  font-weight: bold;
  color: white;
  line-height: 50px;
  letter-spacing: 2px;
}
</style>
