Page({
  data: {
    message: ''
  },
  set() {
    this.setData({
      message: 'add to favorite event triggered' + Date.now().toLocaleString()
    })
  },
  listen() {
    bn.onAddToFavorites(this.set)
  },
  unlisten() {
    bn.offAddToFavorites(this.set)
  }
})
