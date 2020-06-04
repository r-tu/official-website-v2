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
    this.$api.getTestApi().then(res => {
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