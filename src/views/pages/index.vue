<template>
  <a-layout class="book_index_content">
    <a-spin v-if="!dataReady" style="margin-top: 100px" />
    <div v-if="dataReady">
      <div>
        <a-carousel autoplay>
          <div class="book_index_content_container">
            <img
              src="../../assets/back1.jpg"
              style="height: 460px;width: 100%"
            />
          </div>
          <div class="book_index_content_container">
            <img
              src="../../assets/back2.jpg"
              style="height: 460px;width: 100%"
            />
          </div>
          <div class="book_index_content_container">
            <img
              src="../../assets/back3.jpg"
              style="height: 460px;width: 100%"
            />
          </div>
          <div class="book_index_content_container">
            <img
              src="../../assets/back4.jpg"
              style="height: 460px;width: 100%"
            />
          </div>
        </a-carousel>
      </div>

      <div style="max-width: 1140px;width: 1140px;margin: 30px auto">
        <div style="height: fit-content">
          <a-row :gutter="32" type="flex" justify="space-around" align="middle">
            <a-col :span="8">
              <a-card :bordered="true" :hoverable="true">
                <a-col :span="6" style="height: 100%">
                  <i
                    class="iconfont icon-car"
                    style="color: #24936E;font-size: 64px;"
                  ></i>
                </a-col>
                <a-col :span="18" style="height: 100%">
                  <div style="padding: 12px;height: 100%">
                    <p
                      style="font-size: 18px;font-weight: bold;margin-bottom: 8px"
                    >
                      更快的物流
                    </p>
                    <p style="margin-bottom: 0;font-size: 12px">
                      让您早享阅读的乐趣
                    </p>
                  </div>
                </a-col>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="true" :hoverable="true">
                <a-col :span="6" style="height: 100%">
                  <i
                    class="iconfont icon-weibiaoti1"
                    style="color: #24936E;font-size: 64px;"
                  ></i>
                </a-col>
                <a-col :span="18" style="height: 100%">
                  <div style="padding: 12px;height: 100%">
                    <p
                      style="font-size: 18px;font-weight: bold;margin-bottom: 8px"
                    >
                      更优惠的折扣
                    </p>
                    <p style="margin-bottom: 0;font-size: 12px">
                      意味着更多好书将被您收藏
                    </p>
                  </div>
                </a-col>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card :bordered="true" :hoverable="true">
                <a-col :span="6" style="height: 100%">
                  <i
                    class="iconfont icon-phone"
                    style="color: #24936E;font-size: 64px;"
                  ></i>
                </a-col>
                <a-col :span="18" style="height: 100%">
                  <div style="padding: 12px;height: 100%">
                    <p
                      style="font-size: 18px;font-weight: bold;margin-bottom: 8px"
                    >
                      更暖心的服务管家
                    </p>
                    <p style="margin-bottom: 0;font-size: 12px">
                      为您提供优质服务
                    </p>
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
            <a-col :span="4" v-for="text in infoDataRow1" :key="text.itemId">
              <a-card
                :bordered="false"
                :hoverable="true"
                :key="text.itemId"
                @click="selectBook(text.itemId)"
              >
                <a-row style="margin: 10px 0">
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_type">
                      {{ text.itemAuthor }}
                    </p>
                    <p class="book_index_content_bookList_p_name">
                      {{ text.itemNameChi }}
                    </p>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="16" :offset="4">
                    <img :src="text.itemCover" style="width: 100%" />
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_price">
                      <i
                        class="iconfont icon-renminbi1"
                        style="color: #24936E;font-size: 18px;"
                      ></i>
                      {{ text.itemPrice }}
                    </p>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4" v-for="text in infoDataRow2" :key="text.itemId">
              <a-card
                :bordered="false"
                :hoverable="true"
                :key="text.itemId"
                @click="selectBook(text.itemId)"
              >
                <a-row style="margin: 10px 0">
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_type">
                      {{ text.itemAuthor }}
                    </p>
                    <p class="book_index_content_bookList_p_name">
                      {{ text.itemNameChi }}
                    </p>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="16" :offset="4">
                    <img :src="text.itemCover" style="width: 100%" />
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_price">
                      <i
                        class="iconfont icon-renminbi1"
                        style="color: #24936E;font-size: 18px;"
                      ></i>
                      {{ text.itemPrice }}
                    </p>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div style="height: fit-content;margin-top: 50px;text-align: left">
          <span style="font-size: 24px;font-weight: bolder;color: #42b983"
            >好书分享</span
          >
          <a style="margin-left: 10px">更多>></a>
        </div>
        <a-divider style="margin-top: 6px" />
        <div style="height: fit-content;margin-top: 30px">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4" v-for="text in infoDataRow1" :key="text.itemId">
              <a-card
                :bordered="false"
                :hoverable="true"
                :key="text.itemId"
                @click="selectBook(text.itemId)"
              >
                <a-row style="margin: 10px 0">
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_type">
                      {{ text.itemAuthor }}
                    </p>
                    <p class="book_index_content_bookList_p_name">
                      {{ text.itemNameChi }}
                    </p>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="16" :offset="4">
                    <img :src="text.itemCover" style="width: 100%" />
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_price">
                      <i
                        class="iconfont icon-renminbi1"
                        style="color: #24936E;font-size: 18px;"
                      ></i>
                      {{ text.itemPrice }}
                    </p>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="4" v-for="text in infoDataRow2" :key="text.itemId">
              <a-card
                :bordered="false"
                :hoverable="true"
                :key="text.itemId"
                @click="selectBook(text.itemId)"
              >
                <a-row style="margin: 10px 0">
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_type">
                      {{ text.itemAuthor }}
                    </p>
                    <p class="book_index_content_bookList_p_name">
                      {{ text.itemNameChi }}
                    </p>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="16" :offset="4">
                    <img :src="text.itemCover" style="width: 100%" />
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <p class="book_index_content_bookList_p_price">
                      <i
                        class="iconfont icon-renminbi1"
                        style="color: #24936E;font-size: 18px;"
                      ></i>
                      {{ text.itemPrice }}
                    </p>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
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
      infoDataRow1: [],
      infoDataRow2: [],
      infoDataRow3: [],
      infoDataRow4: [],

      username: "用户登录",
      listSize: 0,
      dataReady: false
    };
  },
  components: { ACol, ARow },
  beforeMount() {
    this.$api.index
      .indexBooks({
        start: 0
      })
      .then(res => {
        if (res.data.code === 200) {
          this.listSize = res.data.data.total;
          let infoData = res.data.data.list;
          let baseUrl = this.$store.getters.getBaseUrl.toString();
          for (let i = 0; i < 5; i++) {
            infoData[i].itemCover = baseUrl + infoData[i].itemCover;
            this.infoDataRow1.push(infoData[i]);
          }
          for (let i = 5; i < 10; i++) {
            infoData[i].itemCover = baseUrl + infoData[i].itemCover;
            this.infoDataRow2.push(infoData[i]);
          }
          // for(let i=10;i<15;i++){
          //   infoData[i].itemCover = "https://pic.intellizhi.cn/"+infoData[i].itemCover
          //   this.infoDataRow3.push(infoData[i]);
          // }
          // for(let i=15;i<20;i++){
          //   infoData[i].itemCover = "https://pic.intellizhi.cn/"+infoData[i].itemCover
          //   this.infoDataRow4.push(infoData[i]);
          // }
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
  min-height: 100%;
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
  min-width: 1140px;
}
.ant-carousel >>> .slick-slide {
  height: 460px;
  line-height: 460px;
  background: #fcfaf2;
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
