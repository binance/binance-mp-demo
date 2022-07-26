Page({
  data: {
    data: ''
  },
  getEmailAddress({ detail }) {
    if (!detail.code) {
      console.log('[getEmailAddesss] SUCCESS:', detail)
      this.setData({
        data: `[getEmailAddesss] SUCCESS: ${JSON.stringify(detail, null, 4)}`
      })
    } else {
      console.log('[getEmailAddesss] ERROR:', detail)
      this.setData({
        data: `[getEmailAddesss] ERROR: ${JSON.stringify(detail, null, 4)}`
      })
    }
  }
})
