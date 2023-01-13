Page({
  data: {
    resData: ""
  },
  onShow() {
    this.requestMockApi()
  },
  async requestMockApi() {
    const res = await bn.request({
      url: 'https://example.com/',
      responseType: 'text',
      dataType: 'json',
    })
    console.log(res);
    if (res.statusCode === 200) {
      this.setData({
        resData: JSON.stringify(res.data)
      })
    }
  }
})
