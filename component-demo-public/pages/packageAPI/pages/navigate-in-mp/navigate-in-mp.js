Page({
  data: {
  },
  relaunchIndex() {
    bn.reLaunch({ url: 'pages/tabbar/component/index' })
  },
  relaunchApi() {
    bn.reLaunch({
      url: 'pages/packageAPI/pages/navigate-to-mp-deeplink/navigate-to-mp-deeplink'
    })
  }
})
