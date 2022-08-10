Page({
  data: {
  },
  onPullDownRefresh(){
    console.log(`onPullDownRefresh`);
    bn.showLoading()
  },
  onClick() {
    bn.stopPullDownRefresh()
    bn.hideLoading()
  }
})
