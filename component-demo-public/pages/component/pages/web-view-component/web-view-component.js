Page({
  data: {

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
  sendMessageToOne() {
    bn.createSelectorQuery().select('#component1').context(function(res) {
      console.log('henry send one')
      res.context.postMessage('test message to component 1')
    }).exec()
  },
  sendMessageToTwo() {
    bn.createSelectorQuery().select('#component2').context(function(res) {
      console.log('henry send one')
      res.context.postMessage('test message to component 2')
    }).exec()
  },
  async onMessageFromTwo(e) {
    await bn.showModal({
      title: 'Message From WebView 2',
      content: JSON.stringify(e.detail.data)
    })
  },
  async onMessageFromOne(e) {
    await bn.showModal({
      title: 'Message From WebView 1',
      content: JSON.stringify(e.detail.data)
    })
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
