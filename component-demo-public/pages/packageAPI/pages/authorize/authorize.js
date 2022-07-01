Page({
  data: {
    openSettingData: '',
    getSettingData: ''
  },
  onShow() {
    this.getSetting()
  },
  openSetting: async function (e) {
    console.log('[openSetting] SUCCESS:', e.detail)
    this.setData({
      openSettingData: `[openSetting] SUCCESS: ${JSON.stringify(
        e.detail,
        null,
        4
      )}`
    })
  },

  getSetting: async function () {
    try {
      const res = await bn.getSetting()

      console.log('[getSetting] SUCCESS:', res)
      this.setData({
        getSettingData: `[getSetting] SUCCESS: ${JSON.stringify(res, null, 4)}`
      })
    } catch (error) {
      console.log('[getSetting] ERROR:', error)
      this.setData({
        getSettingData: `[getSetting] ERROR: ${JSON.stringify(error, null, 4)}`
      })
    }
    return
  },

  authorizeApi: function (e) {
    const { scope } = e.currentTarget.dataset
    return bn
        .authorize({ scope })
        .then(res => console.log(`[authorize ${scope}] SUCCESS:`, res))
        .catch(err => console.log(`[authorize ${scope}] ERROR:`, err))
  }
})
