Page({
  data: {
    icons: [
      'circle',
      'download',
      'info',
      'safe-success',
      'safe-warn',
      'success',
      'success-circle',
      'success-no-circle',
      'waiting',
      'waiting-circle',
      'warn',
      'info-circle',
      'cancel',
      'search',
      'clear',
      'back',
      'delete',
      'success-no-circle-thin',
      'arrow',
      'arrow-bold',
      'back-arrow',
      'back-arrow-thin',
      'close',
      'close-thin',
      'back-circle'
    ]
  },
  handleTap(e) {
    console.log(`[Icon] onClick ${e.currentTarget.dataset.icon}`, e)
  },
  handleLongpress(e) {
    console.log(`[Icon] onLongPress ${e.currentTarget.dataset.icon}`, e)
  },
  handleTouchstart(e) {
    console.log(`[Icon] onTouchStart ${e.currentTarget.dataset.icon}`, e)
  },
  handleTouchmove(e) {
    console.log(`[Icon] onTouchMove ${e.currentTarget.dataset.icon}`, e)
  },
  handleTouchend(e) {
    console.log(`[Icon] onTouchEnd ${e.currentTarget.dataset.icon}`, e)
  },
  handleTouchCancel(e) {
    console.log(`[Icon] onTouchCancel ${e.currentTarget.dataset.icon}`, e)
  },
})
