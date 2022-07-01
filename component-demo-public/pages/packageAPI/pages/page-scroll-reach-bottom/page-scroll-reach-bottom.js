Page({
  data: {
    data: '100',
    durationData: '300'
  },
  onPageScroll(scrollTop) {
      try {
        console.log('onPageScroll', scrollTop)
      } catch (error) {
        console.log('onPageScroll error', error)
      }
  },
  onReachBottom() {
      try {
        console.log('onPageReachBottom useReachBottom')
      } catch (error) {
        console.log('onPageReachBottom useReachBottom error', error)
      }
  },
  onInputData(e) {
    this.setData({
      data: e.detail.value,
    })
  },
  onInputDuration(e) {
    this.setData({
      durationData: e.detail.value,
    })
  },
  pageScrollTo() {
    try {
      bn.pageScrollTo({
        scrollTop: Number(this.data.data),
        duration: this.data.durationData
      })
    } catch (error) {
      bn.showModal({
        title: ' pageScrollTo top fail',
        content: error.message
      })
    }
  },
  pageScrollToBox() {
    try {
      bn.pageScrollTo({
        selector: '.scroll-box-1',
        duration: this.data.durationData
      })
    } catch (error) {
      bn.showModal({
        title: 'pageScrollTo box fail',
        content: error.message
      })
    }
  }
})
