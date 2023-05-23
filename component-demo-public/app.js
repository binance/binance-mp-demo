// test + 1 // test not defined error with native catch

App({
  onLaunch(payload) {
    console.log('App onLaunch', payload)
    // Promise.reject('onLaunch Promise error')
    // throw new Error('onLaunch error')
  },
  onThemeChange(payload) {
    const { theme } = bn.getSystemInfoSync()
    console.log('onThemeChange', theme, payload)
  },
  onError(error) {
    console.log('onError', error)
    // aa + 1 // test not defined error with onError catch
  },
  onUnhandledRejection(error) {
    console.log('onUnhandledRejection error', error)
  },
  onShow(payload) {
    console.log('App onShow', payload)
    // Promise.reject('onShow Promise error')
    // throw new Error('onShow error')
  }
})
