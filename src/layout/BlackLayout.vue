<template>
  <a-layout id="components-layout-demo-fixed" style="height: 100%">
    <a-layout-content style="padding: 0;min-height: fit-content">
      <router-view />
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "BlackLayout",
  components: {
    Footer
  }
};
</script>

<style scoped></style>
