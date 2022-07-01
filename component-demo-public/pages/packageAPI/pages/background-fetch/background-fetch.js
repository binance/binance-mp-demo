Page({
  data: {
    token: '',
    value: '',
    logs: []
  },

  consoleLogs: function consoleLogs(title, data) {
    this.setData({
      logs: [
        { title, timeStamp: Date.now(), data: JSON.stringify(data, null, 2) },
        ...this.data.logs
      ]
    })
  },

  setValue(e) {
    this.setData({
      value: e.detail.value
    })
  },

  onShow() {
    bn.onBackgroundFetchData(({ fetchType, fetchedData, timeStamp }) => {
      this.consoleLogs(`[onBackgroundFetchData] callback`, {
        fetchType,
        fetchedData,
        timeStamp
      })
    })
  },

  getBackgroundFetchToken: function () {
    this.setData({
      logs: []
    })
    bn.getBackgroundFetchToken()
      .then(args => {
        this.setData({
          token: args.token
        })
        console.log(`[getBackgroundFetchToken] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchToken] fail`, args)
      })
  },

  setBackgroundFetchToken() {
    this.setData({
      logs: []
    })
    bn.setBackgroundFetchToken({
      token: this.data.value
    })
      .then(args => {
        console.log(`[setBackgroundFetchToken] success`, args)
      })
      .catch(args => {
        console.log(`[setBackgroundFetchToken] fail`, args)
      })
  },

  getBackgroundFetchDataPeriodic: function () {
    this.setData({
      logs: []
    })
    bn.getBackgroundFetchData({
      fetchType: 'periodic'
    })
      .then(args => {
        console.log(`[getBackgroundFetchData] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchData] fail`, args)
      })
  },

  getBackgroundFetchDataPre: function () {
    this.setData({
      logs: []
    })
    bn.getBackgroundFetchData({
      fetchType: 'pre'
    })
      .then(args => {
        console.log(`[getBackgroundFetchData] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchData] fail`, args)
      })
  }
})
