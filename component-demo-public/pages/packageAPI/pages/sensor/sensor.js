let handlers = {}
Page({
  data: {
    showCompass: '',
    showAccelerometer: '',
    showDeviceMotion: '',
    showGyroscope: '',
    showDeviceOrientation: ''
  },
  onoffCompassEvent(params) {
    this.setData({
      showCompass: JSON.stringify(params)
    })
  },
  onoffAccelerometerEvent(params) {
    this.setData({
      showAccelerometer: JSON.stringify(params)
    })
  },
  onoffDeviceMotionEvent(params) {
    this.setData({
      showDeviceMotion: JSON.stringify(params)
    })
  },
  onoffGyroscopeEvent(params) {
    this.setData({
      showGyroscope: JSON.stringify(params)
    })
  },
  onoffDeviceOrientationEvent(params) {
    this.setData({
      showDeviceOrientation: JSON.stringify(params)
    })
  },
  onCompassChange() {
    handlers.onoffCompassEvent = this.onoffCompassEvent.bind(this)
    bn.onCompassChange(handlers.onoffCompassEvent)
  },
  offCompassChange() {
    bn.offCompassChange(handlers.onoffCompassEvent)
  },
  onAccelerometerChange() {
    handlers.onoffAccelerometerEvent = this.onoffAccelerometerEvent.bind(this)
    bn.onAccelerometerChange(handlers.onoffAccelerometerEvent)
  },
  offAccelerometerChange() {
    bn.offAccelerometerChange(handlers.onoffAccelerometerEvent)
  },
  onDeviceMotionChange() {
    handlers.onoffDeviceMotionEvent = this.onoffDeviceMotionEvent.bind(this)
    bn.onDeviceMotionChange(handlers.onoffDeviceMotionEvent)
  },
  offDeviceMotionChange() {
    bn.offDeviceMotionChange(handlers.onoffDeviceMotionEvent)
  },
  onGyroscopeChange() {
    handlers.onoffGyroscopeEvent = this.onoffGyroscopeEvent.bind(this) 
    bn.onGyroscopeChange(handlers.onoffGyroscopeEvent)
  },
  offGyroscopeChange() {
    bn.offGyroscopeChange(handlers.onoffGyroscopeEvent)
  },
  onOrientationChange() {
    handlers.onoffDeviceOrientationEvent = this.onoffDeviceOrientationEvent.bind(this)
    bn.onDeviceOrientationChange(handlers.onoffDeviceOrientationEvent)
  },
  offOrientationChange() {
    bn.offDeviceOrientationChange(handlers.onoffDeviceOrientationEvent)
  },
  startCompass() {
    bn.startCompass()
      .then(() =>
        bn.showModal({
          title: 'startCompass',
          content: 'startCompass success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'startCompass',
          content: 'startCompass fail' + JSON.stringify(error)
        })
      )
  },
  stopCompass() {
    bn.stopCompass()
      .then(() =>
        bn.showModal({
          title: 'stopCompass',
          content: 'stopCompass success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'stopCompass',
          content: 'stopCompass fail' + JSON.stringify(error)
        })
      )
  },
  startAccelerometer() {
    bn.startAccelerometer()
      .then(() =>
        bn.showModal({
          title: 'startAccelerometer',
          content: 'startAccelerometer success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'startAccelerometer',
          content: 'startAccelerometer fail' + JSON.stringify(error)
        })
      )
  },
  stopAccelerometer() {
    bn.stopAccelerometer()
      .then(() =>
        bn.showModal({
          title: 'stopAccelerometer',
          content: 'stopAccelerometer success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'stopAccelerometer',
          content: 'stopAccelerometer fail' + JSON.stringify(error)
        })
      )
  },
  startDeviceMotionListening() {
    bn.startDeviceMotionListening()
      .then(() =>
        bn.showModal({
          title: 'startDeviceMotionListening',
          content: 'startDeviceMotionListening success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'startDeviceMotionListening',
          content: 'startDeviceMotionListening fail' + JSON.stringify(error)
        })
      )
  },
  stopDeviceMotionListening() {
    bn.stopDeviceMotionListening()
      .then(() =>
        bn.showModal({
          title: 'stopDeviceMotionListening',
          content: 'stopDeviceMotionListening success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'stopDeviceMotionListening',
          content: 'stopDeviceMotionListening fail' + JSON.stringify(error)
        })
      )
  },
  startGyroscope() {
    bn.startGyroscope()
      .then(() =>
        bn.showModal({
          title: 'startGyroscope',
          content: 'startGyroscope success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'startGyroscope',
          content: 'startGyroscope fail' + JSON.stringify(error)
        })
      )
  },
  stopGyroscope() {
    bn.stopGyroscope()
      .then(() =>
        bn.showModal({
          title: 'stopGyroscope',
          content: 'stopGyroscope success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'stopGyroscope',
          content: 'stopGyroscope fail' + JSON.stringify(error)
        })
      )
  },
  vibrateShort() {
    bn.vibrateShort({ type: 'medium' })
      .then(() =>
        bn.showModal({
          title: 'vibrateShort',
          content: 'vibrateShort success'
        })
      )
      .catch(error =>
        bn.showModal({
          title: 'vibrateShort',
          content: 'vibrateShort fail' + JSON.stringify(error)
        })
      )
  },
  vibrateLong() {
    bn.vibrateLong().then(() =>
      bn
        .showModal({
          title: 'vibrateLong',
          content: 'vibrateLong success'
        })
        .catch(error =>
          bn.showModal({
            title: 'vibrateLong',
            content: 'vibrateLong fail' + JSON.stringify(error)
          })
        )
    )
  }
})
