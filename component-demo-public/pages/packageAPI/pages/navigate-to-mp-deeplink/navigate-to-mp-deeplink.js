Page({
  data: {
    deeplink:
      '/mp/app?appId=cNjQgR7tZB7VffLsQvc3YM&rev=006a05ebf14db3e4a8e69cb6bc8b2589&channel=published&startPagePath=cGFnZXMvcGFja2FnZUFQSS9wYWdlcy9uYXZpZ2F0ZS10by1tcC1kZWVwbGluay9uYXZpZ2F0ZS10by1tcC1kZWVwbGluaw&startPageQuery=Zm9vPWJhciZiYXI9Zm9v&extraData=eyJkZXYiOnRydWV9',
    toMPPayload: {
      appId: 'cNjQgR7tZB7VffLsQvc3YM',
      path: 'pages/packageAPI/pages/navigate-to-mp-deeplink/navigate-to-mp-deeplink?foo=bar&bar=foo',
      extraData: {
        dev: true
      },
      envVersion: 'published',
      rev: '006a05ebf14db3e4a8e69cb6bc8b2589',
      type: 'app'
    },
    toMppPayloadJson: ''
  },
  onLoad() {
    this.setData({
      toMppPayloadJson: JSON.stringify(this.data.toMPPayload, null, 2)
    })
  },
  setDeeplink(e) {
    this.setData({
      deeplink: e.detail.value
    })
  },
  setToMPPayload(e) {
    this.setData({
      toMppPayloadJson: e.detail.value
    })

    try {
      const payload = JSON.parse(e.detail.value)

      this.setData({
        toMPPayload: payload
      })
    } catch (error) {
      console.error(error)
    }
  },
  navigateToDeeplink() {
    bn.navigateTo({ url: this.data.deeplink, target: 'deeplink' })
  },
  navigateToMiniProgram() {
    bn.navigateToMiniProgram({ ...this.data.toMPPayload })
      .then(res => {
        console.log(`[navigateToMiniProgram] success`, res)
      })
      .catch(res => {
        console.log(`[navigateToMiniProgram] fail`, res)
      })
  },
  navigateBackMiniProgram() {
    bn.navigateBackMiniProgram({ extraData: this.data.toMPPayload.extraData })
      .then(res => {
        console.log(`[navigateBackMiniProgram] success`, res)
      })
      .catch(res => {
        console.log(`[navigateBackMiniProgram] fail`, res)
      })
  },
  exitMiniProgram() {
    bn.exitMiniProgram()
  },
  buttonClick(e) {
    console.log(`[Button] onClick`, e)
  },
  deeplinkNavSuccess(e) {
    console.log(`[deeplink] onSuccess`, e)
  },
  deeplinkNavFail(e) {
    console.log(`[deeplink] onFail`, e)
  },
  deeplinkNavComplete(e) {
    console.log(`[deeplink] onComplete`, e)
  },
  deeplinkNavTap(e) {
    console.log(`[deeplink] onClick`, e)
  },
  mpNavSuccess(e) {
    console.log(`[miniProgram] onSuccess`, e)
  },
  mpNavFail(e) {
    console.log(`[miniProgram] onFail`, e)
  },
  mpNavComplete(e) {
    console.log(`[miniProgram] onComplete`, e)
  },
  mpNavTap(e) {
    console.log(`[miniProgram] onClick`, e)
  },
  base64Encode(encodeStr) {
    /**
     * https://www.base64url.com/
     */
    const b64u =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' // base64url dictionary

    function base64_encode_data(data, len, b64x) {
      let dst = ''
      let i

      for (i = 0; i <= len - 3; i += 3) {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt(
          ((data.charCodeAt(i) & 3) << 4) | (data.charCodeAt(i + 1) >>> 4)
        )
        dst += b64x.charAt(
          ((data.charCodeAt(i + 1) & 15) << 2) | (data.charCodeAt(i + 2) >>> 6)
        )
        dst += b64x.charAt(data.charCodeAt(i + 2) & 63)
      }

      if (len % 3 == 2) {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt(
          ((data.charCodeAt(i) & 3) << 4) | (data.charCodeAt(i + 1) >>> 4)
        )
        dst += b64x.charAt((data.charCodeAt(i + 1) & 15) << 2)
      } else if (len % 3 == 1) {
        dst += b64x.charAt(data.charCodeAt(i) >>> 2)
        dst += b64x.charAt((data.charCodeAt(i) & 3) << 4)
      }

      return dst
    }

    const utf8str = unescape(encodeURIComponent(encodeStr))
    return base64_encode_data(utf8str, utf8str.length, b64u)
  }
})
