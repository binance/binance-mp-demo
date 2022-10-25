Page({
  data: {
    loading: false,
    state: ''
  },
  onShow(e){
    console.log(`onShow`);
  },
  async requestPayment() {
    this.setData({
      loading: true,
      state: ''
    })
    bn.request({
      url: 'https://nezha-mock.fe.qa1fdg.net/order',
      responseType: 'text',
      dataType: 'json',
      success: async function (res) {
        const { timeStamp, certSn, merchantId, noncestr, paySign, prepayId } = res.data.data.option
        const paymentResult = await bn.requestPayment({
          certSn,
          nonceStr: noncestr,
          package: `prepay_id=${prepayId}`,
          merchantId,
          paySign,
          timeStamp
        })
    
        if (paymentResult.status.toString() === '0') {
          this.setData({
            loading: false,
            state: 'Payment Successful!'
          })
        } else {
          this.setData({
            loading: false,
            state: 'Payment Failed'
          })
        }
      }
    })
  }
})
