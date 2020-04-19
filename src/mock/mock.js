import mock from "mockjs";
import * as shoppingCard from "./shoppingCard";
import * as indexBook from "./indexBook";

mock.mock(`/api/shoppingDetail`, "get", () => {
  return shoppingCard.shoppingData;
});

mock.mock(RegExp(`/api/indexBooks` + ".*"), "get", () => {
  return indexBook.indexBooks;
});
