Page({
  data: {
    imageUrl: 'https://bin.bnbstatic.com/image/julia/new-hompage/foreground-image-light.png',
    lazyImageUrl: 'https://bin.bnbstatic.com/image/julia/new-hompage/foreground-image-light.png',
    localImage: 'pages/tabbar/component/resources/pic/1.jpg'
  },
  onClick(e) {
    console.log(`[Image] onClick`, e)
  },
  onLongPress(e) {
    console.log(`[Image] onLongPress`, e)
  },
  onLoad(e) {
    console.log(`[Image] onLoad`, e)
  },
  onError(e) {
    console.log(`[Image] onError`, e)
  },
})
