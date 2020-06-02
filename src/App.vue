<template>
  <div class="app">
    <common-header></common-header>
    <router-view />
    <common-footer></common-footer>
  </div>
</template>

<script>
import commonHeader from "@/components/common/header.vue";
import commonFooter from "@/components/common/footer.vue";
export default {
  components: {
    commonHeader,
    commonFooter
  }
};
</script>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
