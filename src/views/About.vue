<template>
  <div class="about">
    <h1>{{ $t('aboutpage')}}</h1>
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
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>