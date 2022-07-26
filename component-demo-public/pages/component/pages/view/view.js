Page({
  data: {
    a: {
      b: {
        c: 0
      }
    }
  },
  onLoad(query) {
    console.log('onload', this, query)
    this.setData({
      "a.b.c": 1
    })
  },

  onShow() {
    console.log('onShow')
  },
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('onHide')
  },
  onTabItemTap(payload) {
    console.log('onTabItemTap', payload)
  },
  // vie page method
  onTapView(e) {
    console.log('[View] onClick', e)
  },
  onLongPress(e) {
    console.log('[View] onLongPress', e)
  },
  onTouchStart(e) {
    console.log('[View] onTouchStart', e)
  },
  onTouchEnd(e) {
    console.log('[View] onTouchEnd', e)
  },
  onTouchMove(e) {
    console.log('[View] onTouchMove', e)
  },
  onTouchCancel(e) {
    console.log('[View] onTouchCancel', e)
  },
})
