Page({
  data: {
    data: ''
  },
  getPhoneNumber({ detail }) {
    if (!detail.code) {
      console.log('[getPhoneNumber] SUCCESS:', detail)
      this.setData({
        data: `[getPhoneNumber] SUCCESS: ${JSON.stringify(detail, null, 4)}`
      })
    } else {
      console.log('[getPhoneNumber] ERROR:', detail)
      this.setData({
        data: `[getPhoneNumber] ERROR: ${JSON.stringify(detail, null, 4)}`
      })
    }
  }
})
