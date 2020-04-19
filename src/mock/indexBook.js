import Mock from "mockjs";

const indexBooks = Mock.mock({
  status: "OK",
  totalCount: "5",
  "result|5": [
    {
      author: "李智",
      name: "渣男的自我修养",
      type: "自传类",
      price: "99",
      url: "http://47.102.199.91/jspImg/b2.jpg",
      itemID: "@id"
    }
  ]
});

export { indexBooks };
