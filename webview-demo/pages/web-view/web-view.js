Page({
  data: {
    url: "https://www.binance.com/en/js-sdk-demo-ui/webview",
  },
  setValue(e) {
    this.setData({
      url: e.detail.value
    })
  },
  setVisible() {
    this.setData({
      visible: true
    })
  },
  onLoad(query) {
    console.log('onload', this, query)
  },
  onShow() {

  },
  onReady() {
  },
  onWebViewLoad(e) {
    console.log('[WebView] onLoad', e.detail)
  },
  onWebViewError(e) {
    console.log('[WebView] onError', e.detail)
  },
  async onWebViewMessage(e) {
    await bn.showModal({
      title: 'Message From WebView',
      content: JSON.stringify(e.detail.data)
    })
    bn
      .createSelectorQuery()
      .select('.web-view')
      .context(result => {
        result.context.postMessage('hey!')
      })
      .exec()
  },
})
