module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSmartBanner',
      externals: {
        react: 'React'
      }
    }
  }
}
