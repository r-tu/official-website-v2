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
import tools from '@/scripts/global'
export default {
  data() {
    return {
      language: tools.langRegex.test(location.pathname) ? tools.currentLang : process.env.VUE_APP_I18N_LOCALE
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