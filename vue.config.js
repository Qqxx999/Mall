module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'router': '@/router',
        'network': '@/network',
        'common': '@/common',
        'store': '@/store'
      }
    }
  }
}