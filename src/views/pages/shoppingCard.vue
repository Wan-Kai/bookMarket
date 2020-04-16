<template>
  <a-layout class="book_index_content">
    <div class="book_shoppingCard_hint">
      <p class="book_shoppingCard_hint_p">付款前请注意核实账单</p>
    </div>
    <div class="book_shoppingCard_content">
      <p class="book_shoppingCard_hint_p_green">购物车清单</p>
      <a-table
        :rowSelection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange
        }"
        :columns="columns"
        :dataSource="infoData"
        style="min-width: auto"
        class="iot_view_internetServer_table"
        :rowKey="record => record.uid"
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
          <div>
            <a-carousel autoplay dotPosition="left">
              <div>
                <a-col :span="12">
                  <a-card
                    :bordered="false"
                    :hoverable="true"
                    style="height: 100%"
                  >
                    <a-row style="margin: 10px 0">
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_type">
                          书籍类别
                        </p>
                        <p class="book_shopingCard_content_bookList_p_name">
                          书籍名称
                        </p>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="16" :offset="4">
                        <img src="../../assets/book.jpg" style="width: 100%" />
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_price">
                          <i
                            class="iconfont icon-renminbi1"
                            style="color: #24936E;font-size: 18px;"
                          ></i
                          >24.6
                        </p>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card
                    :bordered="false"
                    :hoverable="true"
                    style="height: 100%"
                  >
                    <a-row style="margin: 10px 0">
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_type">
                          书籍类别
                        </p>
                        <p class="book_shopingCard_content_bookList_p_name">
                          书籍名称
                        </p>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="16" :offset="4">
                        <img src="../../assets/book.jpg" style="width: 100%" />
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_price">
                          <i
                            class="iconfont icon-renminbi1"
                            style="color: #24936E;font-size: 18px;"
                          ></i
                          >24.6
                        </p>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </div>
              <div>
                <a-col :span="12">
                  <a-card
                    :bordered="false"
                    :hoverable="true"
                    style="height: 100%"
                  >
                    <a-row style="margin: 10px 0">
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_type">
                          书籍类别
                        </p>
                        <p class="book_shopingCard_content_bookList_p_name">
                          书籍名称
                        </p>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="16" :offset="4">
                        <img src="../../assets/book.jpg" style="width: 100%" />
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_price">
                          <i
                            class="iconfont icon-renminbi1"
                            style="color: #24936E;font-size: 18px;"
                          ></i
                          >24.6
                        </p>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card
                    :bordered="false"
                    :hoverable="true"
                    style="height: 100%"
                  >
                    <a-row style="margin: 10px 0">
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_type">
                          书籍类别
                        </p>
                        <p class="book_shopingCard_content_bookList_p_name">
                          书籍名称
                        </p>
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="16" :offset="4">
                        <img src="../../assets/book.jpg" style="width: 100%" />
                      </a-col>
                    </a-row>
                    <a-row>
                      <a-col :span="24">
                        <p class="book_shopingCard_content_bookList_p_price">
                          <i
                            class="iconfont icon-renminbi1"
                            style="color: #24936E;font-size: 18px;"
                          ></i
                          >24.6
                        </p>
                      </a-col>
                    </a-row>
                  </a-card>
                </a-col>
              </div>
            </a-carousel>
          </div>
        </a-col>
        <a-col :span="10">
          <a-card>
            <p style="font-size: 24px;color: black">账单</p>
            <div>
              <span style="float: left">折扣</span>
              <span style="float: right;color: #1eaf84">0%</span>
            </div>
            <br />
            <div class="book_shoppingCard_content_card">
              <span style="float: left">数量</span>
              <span style="float: right;color: #1eaf84">55</span>
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
                55</span
              >
            </div>
          </a-card>
          <a-button type="primary" style="margin-top: 10px;float: right"
            >结算</a-button
          >
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
    title: "封面",
    dataIndex: "res",
    key: "res",
    scopedSlots: { customRender: "res" }
  },
  {
    title: "书名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "作者",
    dataIndex: "author",
    key: "author"
  },
  {
    title: "类别",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "数量",
    dataIndex: "amount",
    key: "amount",
    scopedSlots: { customRender: "amount" }
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
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
  components: { ACol, ARow },
  data() {
    return {
      columns,
      infoData: [],
      loadingState: true,
      selectedRowKeys: [] // Check here to configure the default column
    };
  },
  beforeMount() {
    this.loadingState = false;

    this.$api.shoppingCard.shoppingDetail({}).then(res => {
      console.log(res);
      console.log(res.data.result);
      this.infoData = res.data.result;
    });
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    checkDetail(record) {
      console.log(record);
    },
    deleteBook(record) {
      console.log(record);
    },
    addBook(record) {
      let amount = parseInt(record.amount, 10);
      let priceSum = parseInt(record.price, 10);
      let price = priceSum / amount;
      record.amount = amount + 1;
      record.price = price * (amount + 1);
    },
    subtractBook(record) {
      console.log(record);
      let amount = parseInt(record.amount, 10);
      if (amount > 1) {
        record.amount = amount - 1;
        let priceSum = parseInt(record.price, 10);
        let price = priceSum / amount;
        record.price = price * (amount - 1);
      }
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
