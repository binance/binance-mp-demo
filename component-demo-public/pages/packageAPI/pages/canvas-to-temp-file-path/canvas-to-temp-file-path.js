Page({
  data: {
    tempFilePath: ''
  },
  toFilePath() {
    const query = bn.createSelectorQuery()
    query
      .select(`.canvas`)
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        bn.canvasToTempFilePath({
          canvas,
          success: (res) => {
            this.setData({
              tempFilePath: res.tempFilePath
            })
          },
           fail(err) {
             console.error(err)
           }
        })
      })
  },
  saveToAlbum() {
    bn.saveImageToPhotosAlbum({ filePath: this.data.tempFilePath })
  },
  onLoad() {
      const query = bn.createSelectorQuery()
      query
        .select(`.canvas`)
        .fields({ node: true, size: true })
        .exec(res => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          ctx.font = 'bold 48px serif'
          ctx.strokeText('Hello world', 50, 100)
        })
  }
})
