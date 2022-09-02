Page({
  data: {
    phoneNumber: ""
  },
  async makePhoneCall() {
    bn.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    })
  },
  handlePhoneNumberChange(e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  }
})
