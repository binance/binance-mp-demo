Page({
  data: {
    pageCtx: null
  },
  onLoad: function(options) {
    this.setData({
      pageCtx: bn.getCurrentInstance().page
    })
    // Do some initialize when page load.
    console.log('[LifeCycle][Page] onLoad', options, this._getCurrentRoute())
  },
  onShow: function(options) {
    console.log(
      '[LifeCycle][Page] onShow',
      options,
      this._getCurrentRoute()
    )
    const tabbar = bn.getTabBar(this.pageCtx)
    // TODO
    tabbar?.setSelected(1)
  },
  onReady: function(options) {
    console.log('[LifeCycle][Page] onReady', options, this._getCurrentRoute())
  },
  onHide: function(options) {
    console.log(
      '[LifeCycle][Page] componentDidHide',
      options,
      this._getCurrentRoute()
    )
  },
  onPullDownRefresh: function(options) {
    console.log(
      '[LifeCycle][Page] onPullDownRefresh',
      options,
      this._getCurrentRoute()
    )
  },
  onTabItemTap(item) {
    console.log('[LifeCycle][Page] onTabItemTap', item)
  },
  _getCurrentRoute() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return currentPage?.route
  }
})
