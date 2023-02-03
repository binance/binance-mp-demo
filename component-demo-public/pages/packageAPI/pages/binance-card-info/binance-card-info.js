Page({
  data: {
    cardInfoResponse: '',
    cardAvailableResponse: '',
    hasCardInfoResponse: false,
    hasCardAvailableResponse: false,
  },
  onReady() {
    console.log('can I use requestBinanceCardInfo:', bn.canIUse('requestBinanceCardInfo'))
    console.log('can I use checkBinanceCardAvailable:', bn.canIUse('checkBinanceCardAvailable'))
  },
  async requestBinanceCardInfo(e) {
    const resp = await bn.requestBinanceCardInfo()
    this.setData({
      hasCardInfoResponse: true,
      cardInfoResponse: JSON.stringify(resp, null, 2)
    })
  },
  async checkBinanceCardAvailable(e) {
    const resp = await bn.checkBinanceCardAvailable()
    this.setData({
      hasCardAvailableResponse: true,
      cardAvailableResponse: JSON.stringify(resp, null, 2)
    })
  },
})
