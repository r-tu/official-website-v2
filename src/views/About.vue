<template>
  <div class="container">
    <h1>{{ $t('aboutpage') }}</h1>
    <el-button type="primary">Eelement-ui</el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  created() {
    // ==== test axios ====
    this.$api.booking
      .getAirport()
      .then((res) => {
        console.log(res)
        alert('test api success:' + res)
      })
      .catch((err) => {
        console.log(err)
        alert('test api error:' + err)
      })
  }
}
</script>
