Page({
  data: {
  },
  onPullDownRefresh(){
    console.log(`onPullDownRefresh`);
  },
  onClick() {
    bn.stopPullDownRefresh()
  }
})
