Page({
  data: {
    title: 'title'
  },
  onLoad() {
    bn.setNavigationBarTitle({ title: this.data.title })
  },
  setTitle(e) {
    this.setData({
      title: e.detail.value
    })
    bn.setNavigationBarTitle({ title: e.detail.value })
  },
  setColor() {
    bn.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff'
    })
  },
  setColorWithAnimation() {
    bn.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000',
      animation: {
        duration: 330,
        timingFunc: 'easeIn'
      }
    })
  }
})
