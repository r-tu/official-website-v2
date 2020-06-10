const dotenv = require('dotenv')
switch (process.env.DEPLOY) {
  case 'uat':
    dotenv.config({ path: '.env.uat' })
    console.log('loaded .env.uat')
    break
  case 'staging':
    dotenv.config({ path: '.env.staging' })
    console.log('loaded .env.staging')
    break
  case 'master':
    dotenv.config({ path: '.env.master' })
    console.log('loaded .env.master')
    break
  default:
    dotenv.config({ path: '.env.develop' })
    console.log('loaded .env.develop')
}
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'zh-TW',
      fallbackLocale: 'zh-TW',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(4000000).maxAssetSize(4000000)
  }
}
