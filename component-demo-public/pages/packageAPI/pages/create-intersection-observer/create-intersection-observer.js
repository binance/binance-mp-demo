Page({
  data: {
    appear: false
  },
  onLoad() {
    this._observer = bn.createIntersectionObserver(this)
    this._observer
      .relativeTo('.scroll-view')
      .observe('.ball', (res) => {
        console.log('createIntersectionObserver: ',res);
        this.setData({
          appear: res.intersectionRatio > 0
        })
      })
     
  },

  onUnload() {
    if (this._observer) this._observer.disconnect()
  }
})
