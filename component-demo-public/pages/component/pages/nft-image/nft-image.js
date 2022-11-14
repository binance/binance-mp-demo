Page({
  data: {
    imageUrl: 'https://bin.bnbstatic.com/image/julia/new-hompage/foreground-image-light.png',
    lazyImageUrl: 'https://bin.bnbstatic.com/image/julia/new-hompage/foreground-image-light.png',
    localImage: 'pages/tabbar/component/resources/pic/1.jpg',
    mode: 'aspectFit',
    modeIndex: 1,
    modes: [
      'scaleToFill',
      'aspectFit',
      'aspectFill',
      'widthFix',
      'heightFix',
      'top',
      'bottom',
      'center',
      'left',
      'right',
      'top left',
      'top right',
      'bottom left',
      'bottom right',
    ],
    formats: [
      {
        url: "https://bin.bnbstatic.com/image/julia/new-hompage/foreground-image-light.png",
        format: 'png'
      },
      {
        url: "pages/tabbar/component/resources/pic/1.jpg",
        format: 'jpg'
      },
      {
        url: "pages/tabbar/component/resources/pic/native-image.svg",
        format: 'svg'
      },
      {
        url: "pages/tabbar/component/resources/pic/native-image.gif",
        format: 'gif'
      },
      {
        url: "pages/tabbar/component/resources/pic/native-image.webp",
        format: 'webp'
      },
    ]
  },
  pickerChange(e) {
    this.setData({
      modeIndex: e.detail.value,
      mode: this.data.modes[e.detail.value]
    })
  },
  onClick(e) {
    console.log(`[Image] onClick`, e)
  },
  onLongPress(e) {
    console.log(`[Image] onLongPress`, e)
  },
  onImageLoad(e) {
    console.log(`[Image] onLoad`, e)
  },
  onError(e) {
    console.log(`[Image] onError`, e)
  },
})
