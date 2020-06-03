<template>
  <div class="container">
    <h1>{{ $t('aboutpage')}}</h1>
    <el-button type="primary">測試Eelement-ui</el-button>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    //test axios
    this.axios
      .get("https://w5q6k.sse.codesandbox.io/api/v1/cumulative")
      .then(res => {
        console.log(res);
        alert('test api success')
      })
      .catch(err => {
        console.log(err);
        alert('test api error')
      });
  }
};
</script>