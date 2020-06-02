<template>
  <div>
    <div class="nav">
      <router-link to="/">{{ $t('link_home') }}</router-link> |
      <router-link to="/about">{{ $t('link_about') }}</router-link>
    </div>
    <div class="language">
      <select v-model="language">
        <option value="zh-TW">{{ $t('language_chinese') }}</option>
        <option value="en-US">{{ $t('language_english') }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: location.pathname.split('/')[1]
    }
  },
  watch: {
    language(value) {
      this.changeLang(value);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.language {
  position: absolute;
  right: 0;
  top: 0;
}
</style>