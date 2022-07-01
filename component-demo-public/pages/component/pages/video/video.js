Page({
  data: {
    id: 'myVideo',
  },
  onLoad(query) {
    console.log('onload', this, query)
    // setTimeout(() => {
    //   if (!this.videoContext) throw new Error('Missing VideoContext')
    //   this.videoContext.play()
    // }, 500)
  },
  onShow() {
    console.log(`[LifeCycle][Textarea] useEffect`)
    setTimeout(() => {
      if (!this.videoContext) throw new Error('Missing VideoContext')
      this.videoContext.play()
    }, 500)
  },
  onReady() {
    this.videoContext = bn.createVideoContext('myVideo')
  },

  onPlay(e) {
    console.log('[video] onPlay', e)
  },
  onPause(e) {
    console.log('[video] onPause', e)
  },
  onEnded(e) {
    console.log('[video] onEnded', e)
  },
  onTimeupdate(e) {
    console.log('[video] onTimeupdate', e)
  },
  onFullscreenchange(e) {
    console.log('[video] onFullscreenchange', e)
  },
  onLoadedmetadata(e) {
    console.log('[video] onLoadedmetadata', e)
  },
  onError(e) {
    console.log('[video] onError', e)
  },

})
