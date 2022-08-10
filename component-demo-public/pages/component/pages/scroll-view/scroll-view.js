Page({
  data: {
    items: new Array(3).fill(1),
    scrollTop: 25,
    scrollIntoView: 'demo3'
  },
  onShow() {
    setTimeout(() => {
      this.setData({
        scrollTop:50,
        scrollIntoView: 'demo2'
      })
    }, 3000)
  },
  onScroll(e) {
    console.log('onScroll', e)
  },
  onScrollToUpper(e) {
    console.log('onScrollToUpper', e)
  },
  onScrollToLower(e) {
    console.log('onScrollToLower', e)
  },
  onTap(e) {
    console.log(`[scroll-view] bindtap`, e)
  },
  onLongpress(e) {
    console.log(`[scroll-view] longpress`, e)
  },
  scrollToTop() {

  },
  loadMore() {
    this.setData({
      items: [...this.data.items, ...new Array(3).fill(1)]
    })
  }
})
