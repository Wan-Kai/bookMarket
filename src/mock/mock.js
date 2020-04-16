import mock from "mockjs";
import * as shoppingCard from "./shoppingCard";

mock.mock(`/api/shoppingDetail`, "get", () => {
  return shoppingCard.shoppingData;
});
