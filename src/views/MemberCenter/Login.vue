<template>
  <div>
    <form>
      <div>
        <span>{{ $t('login_account') }}：</span>
        <input type="text" v-model="account" />
      </div>
      <div>
        <span>{{ $t('login_password') }}：</span>
        <input type="password" v-model="password" />
      </div>
      <div>
        <input
          type="submit"
          :value="$t('button_login')"
          @click.prevent="send"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    send() {
      console.log(this.account, this.password)
      this.$store.dispatch('isLogin', true)
      this.$router.push(this.$tools.redirectLang('/member'))
    }
  }
}
</script>
