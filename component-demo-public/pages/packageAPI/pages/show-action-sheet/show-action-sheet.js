Page({
  data: {
    alertText: 'alert',
    itemColor: '#000000',
    itemList: ['test0', 'test1', 'test2', 'test3'],
    data: '',
  },
  handleSetAlertText(e) {
    this.setData({
      alertText: e.detail.value,
    })
  },
  handleSetItemColor(e) {
    this.setData({
      itemColor: e.detail.value,
    })
  },
  showActionSheet() {
    const options = {
      alertText: this.data.alertText || undefined,
      itemColor: this.data.itemColor || undefined,
      itemList: this.data.itemList,
    }
    console.log(`showActionSheet options: ${JSON.stringify(options)}`)

    bn
      .showActionSheet({ ...options })
      .then(res => {
        console.log('[showActionSheet] SUCCESS:', res)
        this.setData({
          data: `[showActionSheet] SUCCESS: ${JSON.stringify(res, null, 4)}`,
        })
      })
      .catch(error => {
        console.log('[showActionSheet] ERROR:', error)
        this.setData({
          data: `[showActionSheet] ERROR: ${JSON.stringify(error, null, 4)}`,
        })
      })
  }
})
