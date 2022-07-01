Page({
  data: {
  },
  onReady() {
    bn.onAppShow(this.appShow)
    bn.onAppHide(this.appHide)
    bn.onError(this.appError)
    bn.onUnhandledRejection(this.appUnhandledRejection)
  },

  onUnload() {
    bn.offAppShow(this.appShow)
    bn.offAppHide(this.appHide)
    bn.offError(this.appError)
    bn.offUnhandledRejection(this.appUnhandledRejection)
  },

  onShow(result) {
    console.log('onAppShow', result)
    bn.showModal({
      title: 'onAppShow',
      content: JSON.stringify(result)
    })
  },

  appUnhandledRejection(result) {
    console.log('onUnhandledRejection', result)
    bn.showModal({
      title: 'onUnhandledRejection',
      content: JSON.stringify(result)
    })
  },

  onHide() {
    console.log('onAppHide')
    bn.showToast({ title: 'onAppHide' })
  },

  appError(result) {
    console.log('onError', result)
    bn.showModal({ title: 'onError', content: JSON.stringify(result) })
  },

  setSomeErr() {
    // 点击回调执行错误会被框架捕获，所以需要写在setTimeout或hook里面
    setTimeout(() => {
      throw new Error('error: application-event test')
    }, 0)
  },

  setUnhandledRejection() {
    // 点击回调执行错误会被框架捕获，所以需要写在setTimeout或hook里面
    try {
      new Promise((_resolve, reject) => {
        reject('test unhandled rejection')
      })
    } catch (error) {
      console.log('setUnhandledRejection error', error)
    }
  }
})
