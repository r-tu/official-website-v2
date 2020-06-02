export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      var path = this.$route.path.split('/');
      path[1] = lang;
      path = path.join('/');
      history.replaceState({}, document.head.title, path);
    }
  }
}