<template>
  <a-layout class="book_index_content">
    <div>
      <a-carousel autoplay>
        <div class="book_index_content_container">
          <a-button type="primary">提交</a-button>
        </div>
        <div class="book_index_content_container">
          <a-button type="primary">提交</a-button>
        </div>
        <div class="book_index_content_container">
          <a-button type="primary">提交</a-button>
        </div>
        <div class="book_index_content_container">
          <a-button type="primary">提交</a-button>
        </div>
      </a-carousel>
    </div>

    <div style="max-width: 1140px;width: 1140px;margin: 30px auto">
      <div style="height: fit-content">
        <a-row :gutter="32" type="flex" justify="space-around" align="middle">
          <a-col :span="8">
            <a-card :bordered="true" :hoverable="true">
              <a-col :span="8" style="height: 100%">
                <i
                  class="iconfont icon-car"
                  style="color: #24936E;font-size: 64px;"
                ></i>
              </a-col>
              <a-col :span="16" style="height: 100%">
                <div style="padding: 16px;height: 100%">
                  <span>更快的物流</span>
                </div>
              </a-col>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card :bordered="true" :hoverable="true">
              <a-col :span="8" style="height: 100%">
                <i
                  class="iconfont icon-weibiaoti1"
                  style="color: #24936E;font-size: 64px;"
                ></i>
              </a-col>
              <a-col :span="16" style="height: 100%">
                <div style="padding: 16px;height: 100%">
                  <span>更优惠的折扣</span>
                </div>
              </a-col>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card :bordered="true" :hoverable="true">
              <a-col :span="8" style="height: 100%">
                <i
                  class="iconfont icon-phone"
                  style="color: #24936E;font-size: 64px;"
                ></i>
              </a-col>
              <a-col :span="16" style="height: 100%">
                <div style="padding: 16px;height: 100%">
                  <span>更暖心的服务管家</span>
                </div>
              </a-col>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <div style="height: fit-content;margin-top: 50px;text-align: left">
        <span style="font-size: 24px;font-weight: bolder;color: #42b983"
          >推荐书籍</span
        >
        <a style="margin-left: 10px">更多>></a>
      </div>
      <a-divider style="margin-top: 6px" />
      <div style="height: fit-content;margin-top: 30px">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :span="4" v-for="text in infoData" :key="text.id">
            <a-card
              :bordered="false"
              :hoverable="true"
              :key="text.id"
              @click="selectBook(text.id)"
            >
              <a-row style="margin: 10px 0">
                <a-col :span="24">
                  <p class="book_index_content_bookList_p_type">
                    {{ text.author }}
                  </p>
                  <p class="book_index_content_bookList_p_name">
                    {{ text.name }}
                  </p>
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="16" :offset="4">
                  <img :src="text.url" style="width: 100%" />
                </a-col>
              </a-row>
              <a-row>
                <a-col :span="24" :key="text.id">
                  <p class="book_index_content_bookList_p_price">
                    <i
                      class="iconfont icon-renminbi1"
                      style="color: #24936E;font-size: 18px;"
                    ></i>
                    {{ text.price }}
                  </p>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </a-layout>
</template>

<script>
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
export default {
  name: "index",
  data() {
    return {
      infoData: [],
      username: "用户登录"
    };
  },
  components: { ACol, ARow },
  beforeMount() {
    this.$api.index
      .indexBooks({})
      .then(res => {
        console.log(res);
        this.infoData = res.data.result;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    selectBook(id) {
      this.$router.push({
        name: "BookDetail",
        query: { id: id }
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
}
.book_index_content_bookList_p_type {
  text-align: center;
  padding: 0;
  margin-bottom: 6px;
  font-size: 12px;
}
.book_index_content_bookList_p_name {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.book_index_content_bookList_p_price {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
.book_index_content_container {
  margin: 0 auto;
  display: block !important;
  max-width: 1140px;
}
.ant-carousel >>> .slick-slide {
  height: 460px;
  line-height: 460px;
  background: #24936e;
  overflow: hidden;
}
/deep/.ant-card-body {
  padding: 0;
  line-height: 1;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
