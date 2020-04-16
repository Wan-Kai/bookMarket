<template>
  <a-layout class="book_index_content">
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
    this.id = this.$router.query.id;
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
</style>
