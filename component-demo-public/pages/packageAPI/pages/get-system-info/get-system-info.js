Page({
  data: {
    data: ""
  },
  onShow() {
    this.getSystemInfo()
  },
  async getSystemInfo() {
    try {
      const res = await bn.getSystemInfo()
      console.log('[getSystemInfo] SUCCESS:', res)
      this.setData({
        data: `[getSystemInfo] SUCCESS: ${JSON.stringify(res, null, 4)}`
      })
    } catch (error) {
      console.log('[getSystemInfo] ERROR:', error)
      this.setData({
        data: `[getSystemInfo] ERROR: ${JSON.stringify(error, null, 4)}`
      })
    }
    return
  }
})
