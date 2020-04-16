<template>
  <a-layout class="book_index_content">
    <div class="book_bookDetail_hint">
      <p class="book_bookDetail_hint_p">书籍详情</p>
    </div>
    <p>
      {{ this.id }}
    </p>
  </a-layout>
</template>

<script>
export default {
  name: "bookDetail",
  data() {
    return {
      id: ""
    };
  },
  beforeMount() {
    this.id = this.$route.query.id;
    console.log(this.id);
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
