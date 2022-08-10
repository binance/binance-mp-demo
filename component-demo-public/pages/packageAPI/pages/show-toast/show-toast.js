Page({
  data: {
    title: 'test',
    icon: 'success',
    duration: 1500,
  },
  handleSetTitle(e) {
    this.setData({
      title: e.detail.value,
    })
  },
  handleSetIcon(e) {
    this.setData({
      icon: e.detail.value,
    })
  },
  handleSetDuration(e) {
    this.setData({
      duration: +e.detail.value,
    })
  },
  showToast() {
    const options = {
      title: this.data.title,
      icon: this.data.icon,
      duration: this.data.duration,
    }

    console.log(`showToast options: ${JSON.stringify(options)}`)
    bn.showToast({ ...options })
  },
  hideToast() {
    bn.hideToast()
  },
  showLoading() {
    bn.showLoading()
  },
  hideLoading() {
    bn.hideLoading()
  },
})
