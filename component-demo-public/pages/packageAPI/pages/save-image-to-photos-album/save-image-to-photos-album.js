Page({
  data: {
    tempFilePaths: [],
  },
  onShow(e){
    console.log(`onShow`);
  },
  async chooseImage() {
    try {
      const res = await bn.chooseImage({
        count: 3,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera']
      })
      console.log('chooseImage - res', res)
      if (res.tempFilePaths &&
        res.tempFilePaths.length) {
          this.setData({
            tempFilePaths: res.tempFilePaths
          })
        }
      bn.showModal({ title: 'success', content: JSON.stringify(res) })
    } catch (error) {
      console.log('chooseImage - error', error)
      bn.showModal({
        title: 'fail',
        content: `error: ${JSON.stringify(error)}`
      })
    }
  },
  saveImageButton(e)  {
    const {item} = e.currentTarget.dataset
    this.saveImageToPhotosAlbum(item)
  },
  async saveImageToPhotosAlbum(item) {
    try {
      const res = await bn.saveImageToPhotosAlbum({
        filePath: item
      })
      console.log('saveImageToPhotosAlbum - res', res)

      bn.showModal({ title: 'success', content: JSON.stringify(res) })
    } catch (error) {
      console.log('saveImageToPhotosAlbum - error', error)
      bn.showModal({
        title: 'fail',
        content: `error: ${JSON.stringify(error)}`
      })
    }
  }
})
