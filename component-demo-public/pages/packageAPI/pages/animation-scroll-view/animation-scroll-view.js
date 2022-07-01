Page({
  data: {
  },
  onReady() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    currentPage.animate('.rect', [{ rotate: 0 }, { rotate: 360 * 3 }], 5000, {
      scrollSource: '#scroller',
      startScrollOffset: 0,
      endScrollOffset: 1700,
      timeRange: 5000
    })
  }
})
