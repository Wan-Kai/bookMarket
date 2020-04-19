import Mock from "mockjs";

const shoppingData = Mock.mock({
  status: "OK",
  totalCount: "2",
  "result|2": [
    {
      res: "http://47.102.199.91/jspImg/b1.jpg",
      name: "渣男的自我修养",
      author: "李智",
      type: "自传类",
      amount: "1",
      price: "99",
      itemID: "@id"
    }
  ]
});

export { shoppingData };
