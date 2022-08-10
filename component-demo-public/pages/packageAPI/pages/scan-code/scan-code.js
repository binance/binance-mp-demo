Page({
  data: {
    data: 'qrCode',
    scanCodeRes: 'please scan code',
  },
  onInput(e) {
    this.setData({
      data: e.detail.value,
    })
  },
  setScanCodeRes(res) {
    this.setData({
      scanCodeRes: res,
    })
  },
  async scanCode() {
    try {
      const dataArr = this.data.data.split(',')
      const scanType = dataArr.filter(Boolean)

      console.log('scanCode] options', scanType)
      const res = await bn.scanCode({ scanType })

      console.log('[scanCode] SUCCESS:', res)
      this.setScanCodeRes(`[scanCode] SUCCESS: ${JSON.stringify(res)}`)
    } catch (error) {
      console.log('[scanCode] ERROR:', error)
      this.setScanCodeRes(`[scanCode] ERROR: ${JSON.stringify(error)}`)
    }
  }
})
