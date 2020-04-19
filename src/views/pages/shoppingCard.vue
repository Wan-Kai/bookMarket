<template>
  <a-layout class="book_index_content">
    <div class="book_shoppingCard_hint">
      <p class="book_shoppingCard_hint_p">付款前请注意核实账单</p>
    </div>
    <div class="book_shoppingCard_content">
      <p class="book_shoppingCard_hint_p_green">购物车清单</p>
      <a-table
        :columns="columns"
        :dataSource="infoData"
        style="min-width: auto"
        class="iot_view_internetServer_table"
        :rowKey="record => record.uid"
        key="record"
        :loading="loadingState"
        :pagination="false"
      >
        <span slot="res" slot-scope="text">
          <img :src="text" style="height: 96px;line-height: 96px" />
        </span>
        <span slot="amount" slot-scope="text, record">
          <i
            class="iconfont icon-plus-square-solid"
            style="color: #24936E;font-size: 24px;line-height: 24px;cursor: pointer"
            @click="addBook(record)"
          ></i>
          <span
            style="margin: auto 5px;line-height: 24px;vertical-align: top"
            >{{ text }}</span
          >
          <i
            class="iconfont icon-minus-square"
            style="color: #24936E;font-size: 24px;;line-height: 24px;cursor: pointer"
            @click="subtractBook(record)"
          ></i>
        </span>
        <span slot="price" slot-scope="text">
          <i
            class="iconfont icon-renminbi"
            style="color: #24936E;font-size: 16px;;line-height: 24px;cursor: pointer"
          ></i>
          <span
            style="margin: auto 5px;line-height: 24px;vertical-align: top"
            >{{ text }}</span
          >
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="checkDetail(record)">详情</a>
          <a-divider type="vertical" />
          <a @click="deleteBook(record)">删除</a>
        </span>
      </a-table>
    </div>
    <div class="book_shoppingCard_content">
      <a-row style="margin-bottom: 30px" :gutter="16">
        <a-col :span="14">
          <div style="text-align: center">
            <p style="font-size: 20px;margin-bottom: 0;font-weight: bold ">
              您可能会喜欢
            </p>
          </div>
          <a-spin v-if="!recommendDataReady" style="margin: 80px 50%" />
          <div v-if="recommendDataReady">
            <div>
              <a-carousel autoplay dotPosition="left">
                <div>
                  <a-col
                    :span="12"
                    v-for="text in infoDataRow1"
                    :key="text.itemId"
                  >
                    <a-card
                      :bordered="false"
                      :hoverable="true"
                      style="height: 100%"
                      @click="getBookDetail(text.itemId)"
                    >
                      <a-row style="margin: 10px 0">
                        <a-col :span="24">
                          <p class="book_shopingCard_content_bookList_p_type">
                            {{ text.itemAuthor }}
                          </p>
                          <p class="book_shopingCard_content_bookList_p_name">
                            {{ text.itemNameChi }}
                          </p>
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="16" :offset="4">
                          <img
                            :src="text.itemCover"
                            style="width: 100%;height: 260px"
                          />
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="24">
                          <p class="book_shopingCard_content_bookList_p_price">
                            <i
                              class="iconfont icon-renminbi1"
                              style="color: #24936E;font-size: 18px;"
                            ></i
                            >{{ text.itemPrice }}
                          </p>
                        </a-col>
                      </a-row>
                    </a-card>
                  </a-col>
                </div>
                <div>
                  <a-col
                    :span="12"
                    v-for="text in infoDataRow2"
                    :key="text.itemId"
                  >
                    <a-card
                      :bordered="false"
                      :hoverable="true"
                      style="height: 100%"
                      @click="getBookDetail(text.itemId)"
                    >
                      <a-row style="margin: 10px 0">
                        <a-col :span="24">
                          <p class="book_shopingCard_content_bookList_p_type">
                            {{ text.itemAuthor }}
                          </p>
                          <p class="book_shopingCard_content_bookList_p_name">
                            {{ text.itemNameChi }}
                          </p>
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="16" :offset="4">
                          <img
                            :src="text.itemCover"
                            style="width: 100%;height: 260px"
                          />
                        </a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="24">
                          <p class="book_shopingCard_content_bookList_p_price">
                            <i
                              class="iconfont icon-renminbi1"
                              style="color: #24936E;font-size: 18px;"
                            ></i
                            >{{ text.itemPrice }}
                          </p>
                        </a-col>
                      </a-row>
                    </a-card>
                  </a-col>
                </div>
              </a-carousel>
            </div>
          </div>
        </a-col>
        <a-col :span="10">
          <a-spin v-if="loadingState" style="margin: 80px 50%" />
          <div v-if="!loadingState">
            <a-card>
              <p style="font-size: 24px;color: black">账单</p>
              <div>
                <span style="float: left">折扣</span>
                <span style="float: right;color: #1eaf84">{{ off }}%</span>
              </div>
              <br />
              <div class="book_shoppingCard_content_card">
                <span style="float: left">数量</span>
                <span style="float: right;color: #1eaf84">{{ amount }}</span>
              </div>
              <br />
              <a-divider style="margin: 18px 0" />
              <div class="book_shoppingCard_content_card">
                <span style="float: left;font-size: 24px">合计</span>
                <span style="float: right;font-size: 24px;color: #1eaf84">
                  <i
                    class="iconfont icon-renminbi"
                    style="color: #1eaf84;font-size: 24px;"
                  ></i>
                  {{ priceSum }}</span
                >
              </div>
            </a-card>
            <a-button
              type="primary"
              style="margin-top: 10px;float: right"
              @click="commitShoppingCard"
              >结算</a-button
            >
          </div>
        </a-col>
      </a-row>
    </div>
  </a-layout>
</template>

<script>
import ARow from "ant-design-vue/es/grid/Row";
import ACol from "ant-design-vue/es/grid/Col";
const columns = [
  {
    title: "id",
    dataIndex: "itemId",
    key: "itemId"
  },
  {
    title: "封面",
    dataIndex: "url",
    key: "url",
    scopedSlots: { customRender: "res" }
  },
  {
    title: "书名",
    dataIndex: "itemNameChi",
    key: "itemNameChi"
  },
  {
    title: "作者",
    dataIndex: "itemAuthor",
    key: "itemAuthor"
  },
  {
    title: "数量",
    dataIndex: "amount",
    key: "amount",
    scopedSlots: { customRender: "amount" }
  },
  {
    title: "价格",
    dataIndex: "itemPrice",
    key: "itemPrice",
    scopedSlots: { customRender: "price" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  name: "shoppingCard",
  inject: ["reload"],
  components: { ACol, ARow },
  data() {
    return {
      columns,
      recommendDataReady: false,
      infoData: [],
      loadingState: true,
      off: 0,
      amount: 0,
      priceSum: 0,

      infoDataRow1: [],
      infoDataRow2: []
    };
  },
  beforeMount() {
    this.$api.shoppingCard
      .shoppingDetail({
        start: 0
      })
      .then(res => {
        if (res.data.code === 200) {
          let infoDataTemp = res.data.data.list;

          let _self = this;
          infoDataTemp.forEach(item => {
            item.item.url =
              this.$store.getters.getBaseUrl.toString() + item.item.itemCover;
            item.item.amount = 1;
            _self.infoData.push(item.item);
            _self.amount += 1;
            _self.priceSum += parseFloat(item.item.itemPrice);
          });
        } else {
          this.$message.error("获取购物车信息失败");
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.loadingState = false;
      });

    this.$api.index
      .indexBooks({
        start: 0
      })
      .then(res => {
        if (res.data.code === 200) {
          let infoData = res.data.data.list;
          let baseUrl = this.$store.getters.getBaseUrl.toString();
          for (let i = 4; i < 6; i++) {
            infoData[i].itemCover = baseUrl + infoData[i].itemCover;
            this.infoDataRow1.push(infoData[i]);
          }
          for (let i = 6; i < 8; i++) {
            infoData[i].itemCover = baseUrl + infoData[i].itemCover;
            this.infoDataRow2.push(infoData[i]);
          }
          console.log(this.infoDataRow1);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.recommendDataReady = true;
      });
  },
  methods: {
    checkDetail(record) {
      this.$router.push({
        name: "BookDetail",
        query: { id: record.itemId }
      });
    },
    deleteBook(record) {
      this.$api.shoppingCard
        .deletesBook({
          itemId: record.itemId
        })
        .then(res => {
          if (res.data.code === 200) {
            this.reload();
          } else {
            this.$message.error("删除书籍操作失败");
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    },
    addBook(record) {
      // let amount = parseInt(record.amount, 10);
      // let priceSum = parseInt(record.price, 10);
      // let price = priceSum / amount;
      // record.amount = amount + 1;
      // record.price = price * (amount + 1);
      // this.amount += 1;
      // this.priceSum += price;
      console.log(record);
      this.$message.error("暂不支持多本同样的书籍");
    },
    subtractBook(record) {
      let amount = parseInt(record.amount, 10);
      if (amount > 1) {
        record.amount = amount - 1;
        let priceSum = parseInt(record.price, 10);
        let price = priceSum / amount;
        record.price = price * (amount - 1);
        this.amount -= 1;
        this.priceSum -= price;
      }
    },
    commitShoppingCard() {
      this.$message.success("亲，您的订单已经发送，请注意在今晚梦中签收哦!");
    },
    getBookDetail(record) {
      console.log(record);
      this.$router.push({
        name: "BookDetail",
        query: { id: record }
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
.book_shoppingCard_hint {
  height: 50px;
  background: #24936e;
  text-align: center;
}
.book_shoppingCard_hint_p {
  font-size: 24px;
  font-weight: bold;
  color: white;
  line-height: 50px;
  letter-spacing: 2px;
}
.book_shoppingCard_content {
  max-width: 1140px;
  width: 1140px;
  height: fit-content;
  margin: 30px auto 0px;
}
.book_shoppingCard_hint_p_green {
  font-size: 24px;
  font-weight: bolder;
  color: #42b983;
  margin-bottom: 20px;
}
.book_shoppingCard_content_card {
  margin-top: 10px;
}
/deep/.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 8px 8px;
}
/deep/.ant-table-tbody > tr > td {
  padding: 16px 8px !important;
}
/deep/.ant-card-body {
  padding: 30px 25px;
  line-height: 1;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 400px;
  line-height: 400px;
  background: white;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.book_shopingCard_content_bookList_p_type {
  text-align: center;
  padding: 0;
  margin-bottom: 6px;
  font-size: 12px;
}
.book_shopingCard_content_bookList_p_name {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.book_shopingCard_content_bookList_p_price {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
