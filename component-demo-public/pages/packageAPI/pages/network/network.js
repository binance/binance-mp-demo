Page({
  data: {
    showData: ''
  },
  onoffEvent(params) {
    bn.showModal({
      title: 'NetworkStatusChange',
      content: JSON.stringify(params)
    })
  },
  onNetworkStatusChange() {
    bn.onNetworkStatusChange(this.onoffEvent)
  },

  offNetworkStatusChange() {
    bn.offNetworkStatusChange(this.onoffEvent)
  },
  async getNetworkType() {
    try {
      const res = await bn.getNetworkType()

      console.log('[getNetworkType] SUCCESS:', res)
      this.setData({
        showData: JSON.stringify(res),
      })
    } catch (error) {
      console.log('[getNetworkType] ERROR:', JSON.stringify(error))

      this.setData({
        showData: JSON.stringify(error),
      })
    }
  }
})
