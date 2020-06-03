export default {
  methods: {
    changeLang(lang) {
      let path = this.$route.path.split('/');
      path[1] = this.$i18n.locale = lang;
      path = path.join('/');
      history.replaceState({}, document.head.title, path);
    }
  }
}