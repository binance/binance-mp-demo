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
  },
  getAppBaseInfo() {
    try {
      const res = bn.getAppBaseInfo()
      console.log('[getAppBaseInfo] SUCCESS:', res)
      this.setData({
        data: `[getAppBaseInfo] SUCCESS: ${JSON.stringify(res, null, 4)}`
      })
    } catch (error) {
      console.log('[getAppBaseInfo] ERROR:', error)
      this.setData({
        data: `[getAppBaseInfo] ERROR: ${JSON.stringify(error, null, 4)}`
      })
    }
    return
  },
  getDeviceInfo() {
    try {
      const res = bn.getDeviceInfo()
      console.log('[getDeviceInfo] SUCCESS:', res)
      this.setData({
        data: `[getDeviceInfo] SUCCESS: ${JSON.stringify(res, null, 4)}`
      })
    } catch (error) {
      console.log('[getDeviceInfo] ERROR:', error)
      this.setData({
        data: `[getDeviceInfo] ERROR: ${JSON.stringify(error, null, 4)}`
      })
    }
    return
  },
  getWindowInfo() {
    try {
      const res = bn.getWindowInfo()
      console.log('[getWindowInfo] SUCCESS:', res)
      this.setData({
        data: `[getWindowInfo] SUCCESS: ${JSON.stringify(res, null, 4)}`
      })
    } catch (error) {
      console.log('[getWindowInfo] ERROR:', error)
      this.setData({
        data: `[getWindowInfo] ERROR: ${JSON.stringify(error, null, 4)}`
      })
    }
    return
  }
})
