Page({
  data: {
    previewImageOptions: {
      showmenu: true,
      // 当前显示图片的http链接
      current:
        'https://gd1.alicdn.com/imgextra/i3/129250066/O1CN01W7QdSz1CMGpsWAxxp_!!129250066.jpg_400x400.jpg',
      // 需要预览的图片http链接列表
      urls: [
        'https://public.bnbstatic.com/static/images/common/ogImage.jpg',
        'https://gd1.alicdn.com/imgextra/i3/129250066/O1CN01W7QdSz1CMGpsWAxxp_!!129250066.jpg_400x400.jpg'
      ],
      referrerPolicy: 'origin'
    }
  },
  previewImage() {
    try {
      // console.log('mpService', mpService)
      // const res = await
      bn.previewImage(this.data.previewImageOptions)

      // mpService.showModal({ title: 'success', content: JSON.stringify(res) })
    } catch (error) {
      console.log('previewImage - error', error)
      bn.showModal({
        title: 'fail',
        content: `error: ${JSON.stringify(error)}`
      })
    }
  }
})
