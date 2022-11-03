Page({
  data: {
    list: [
      {
        id: 'api',
        name: 'Open API',
        open: false,
        pages: [
          // {
          //   title: 'Binance Login',
          //   url: 'login/login'
          // },
          {
            title: 'Payment',
            url: 'request-payment/request-payment'
          },
          {
            title: 'Subscribe Message',
            url: 'request-subscribe-message/request-subscribe-message'
          },
      //     {
      //       title: 'Monitor',
      //       url: 'monitor/monitor'
      //     },
      //     {
      //       title: 'TwoFa',
      //       url: 'two-fa/two-fa'
      //     },
          {
            title: 'getSystemInfo',
            url: 'get-system-info/get-system-info'
          },
          {
            title: 'Authorize',
            url: 'authorize/authorize'
          },
          //     {
          //       title: 'Get user profile',
          //       url: 'get-user-profile/get-user-profile'
          //     },
          //     {
          //       title: 'Get app settings',
          //       url: 'get-app-settings/get-app-settings'
          //     },
          //     {
          //       title: 'Get app configs',
          //       url: 'get-app-configs/get-app-configs'
          //     },
          {
            title: 'Application Event',
            url: 'application-onoff-event/application-onoff-event'
          },
          {
            title: 'Get Phone Number',
            url: 'get-phone-number/get-phone-number'
          },
          {
            title: 'Get Email Address',
            url: 'get-email-address/get-email-address'
          }
          //     {
          //       title: 'Web3 Provider',
          //       url: 'web3-provider/web3-provider'
          //     },
          //     {
          //       title: 'Wallet Hub',
          //       url: 'wallet-connector-context/wallet-connector-context'
          //     },
          //     {
          //       title: 'CustomApi',
          //       url: 'custom-api/custom-api'
          //     },
          //     {
          //       title: 'handleError',
          //       url: 'handle-error/handle-error'
          //     }
        ],
        image: 'pages/tabbar/API/resources/kind/api.png'
      },
      {
        id: 'page',
        name: 'User Interface',
        open: false,
        pages: [
          {
            title: 'Create Intersection Observer',
            url: 'create-intersection-observer/create-intersection-observer'
          },
          //     {
          //       title: 'Get BXML Node Info',
          //       url: 'get-bxml-node-info/get-bxml-node-info'
          //     },
          {
            title: 'Navigation Bar',
            url: 'navigation-bar/navigation-bar'
          },
          {
            title: 'Pull to refresh',
            url: 'pull-down-refresh/pull-down-refresh'
          },
          {
            title: 'Set TabBar',
            url: '@set-tab-bar'
          },
          {
            title: 'Show Toast',
            url: 'show-toast/show-toast'
          },
      //     {
      //       title: 'Show Dialog',
      //       url: 'kyc-show-dialog/kyc-show-dialog'
      //     },
          {
            title: 'Show Action Sheet',
            url: 'show-action-sheet/show-action-sheet'
          },
      //     {
      //       title: 'Theme',
      //       url: 'theme/theme'
      //     },
      //     {
      //       title: 'Blank Page',
      //       url: 'blank-page/blank-page'
      //     },
      //     {
      //       title: 'Disable Bounces',
      //       url: 'disable-bounces/disable-bounces'
      //     },
      //     {
      //       title: 'Timer',
      //       url: 'timer/timer'
      //     },
          {
            title: 'Animation',
            url: 'animation/animation'
          },
          {
            title: 'Scroll Animation',
            url: 'animation-scroll-view/animation-scroll-view'
          },
          {
            title: 'Page Scroll',
            url: 'page-scroll-reach-bottom/page-scroll-reach-bottom'
          },
          {
            title: 'Virtual List',
            url: 'virtual-list/virtual-list'
          }
        ],
        image: 'pages/tabbar/API/resources/kind/api.png'
      },
      // {
      //   id: 'performance',
      //   name: 'Performance',
      //   open: false,
      //   pages: [
      //     {
      //       title: 'Get performance',
      //       url: 'get-performance/get-performance'
      //     }
      //   ],
      //   image:'pages/tabbar/API/resources/kind/performance.png'
      // },
      {
        id: 'networking',
        name: 'Networking',
        open: false,
        pages: [
          {
            title: 'Request',
            url: 'request/request'
          },
          {
            title: 'Private Request',
            url: 'private-request/private-request'
          },
          // {
          //   title: 'Download / Upload',
          //   url: 'download-upload/download-upload'
          // },
          // {
          //   title: 'WebSocket',
          //   url: 'websocket/websocket'
          // },
          // {
          //   title: 'createBufferUrl',
          //   url: 'create-buffer-url/create-buffer-url'
          // }
        ],
        image: 'pages/tabbar/API/resources/kind/api.png'
      },
      {
        id: 'storage',
        name: 'Storage',
        open: false,
        pages: [
          {
            title: 'Background fetch',
            url: 'background-fetch/background-fetch'
          }
        ],
        image: 'pages/tabbar/API/resources/kind/storage.png'
      },
      {
        id: 'navigation',
        name: 'Navigation',
        open: false,
        pages: [
          {
            title: 'NavigateTo MP or Deeplink',
            url: 'navigate-to-mp-deeplink/navigate-to-mp-deeplink'
          },
          {
            title: 'Navigate in MP ',
            url: 'navigate-in-mp/navigate-in-mp'
          }
          // {
          //   title: 'Hide homeButton',
          //   url: 'hide-home-button/hide-home-button'
          // }
        ],
        image: 'pages/tabbar/API/resources/kind/nav.png'
      },
      {
        id: 'device',
        name: 'Device',
        open: false,
        pages: [
          //     {
          //       title: 'ClipboardData',
          //       url: 'clipboard-data/clipboard-data'
          //     },
          {
            title: 'Network',
            url: 'network/network'
          },
          {
            title: 'ScanCode',
            url: 'scan-code/scan-code'
          },
          {
            title: 'Sensor',
            url: 'sensor/sensor'
          },
          {
            title: 'MakePhoneCall',
            url: 'make-phone-call/make-phone-call'
          },
      //     {
      //       title: 'MemoryWarning',
      //       url: 'memory-warning/memory-warning'
      //     },
          {
            title: 'SetKeepScreenOn',
            url: 'set-keep-screen-on/set-keep-screen-on'
          },
      //     {
      //       title: 'Location',
      //       url: 'location/location'
      //     },
      //     {
      //       title: 'Webauthn',
      //       url: 'webauthn/webauthn'
      //     }
        ],
        image: 'pages/tabbar/API/resources/kind/device.png'
      },
      {
        id: 'media',
        name: 'Media',
        open: false,
        pages: [
          //     {
          //       title: 'ChooseImage',
          //       url: 'choose-image/choose-image'
          //     },
          //     {
          //       title: 'GetImageInfo',
          //       url: 'get-image-info/get-image-info'
          //     },
          {
            title: 'CanvasToTempFilePath',
            url: 'canvas-to-temp-file-path/canvas-to-temp-file-path'
          },
          {
            title: 'PreviewImage',
            url: 'preview-image/preview-image'
          },
          {
            title: 'SaveImageToPhotosAlbum',
            url: 'save-image-to-photos-album/save-image-to-photos-album'
          },
          {
            title: 'FileSystemManager',
            url: 'read-file/read-file'
          },
          // {
          //   title: 'InnerAudio',
          //   url: 'inner-audio/inner-audio'
          // }
        ],
        image: 'pages/tabbar/API/resources/kind/media.png'
      }
    ],
    dispaySetTabbar: false,
    apiText: 'API 接口',
    isTabBarVisible: true,
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  toggleSetTabbar() {
    this.setData({
      dispaySetTabbar: !this.data.dispaySetTabbar
    })
    console.log('toggleSetTabbar', this.data)
  },
  kindToggle(e) {
    const { id } = e.currentTarget.dataset
    const nextList = this.data.list.map(item => {
      if (item.id !== id) return item
      return { ...item, open: !item.open, name: item.name }
    })
    this.setData({
      list: nextList
    })
  },
  // for set-tab-bar demo
  setTabBarItemRemoteIcon() {
    bn.setTabBarItem({
      index: 0,
      iconPath: 'https://github.githubassets.com/images/icons/emoji/tada.png'
    })
  },
  setTabBarItemLocalIcon() {
    bn.setTabBarItem({
      index: 0,
      iconPath: 'image/icon_API.png'
    })
  },
  setTabBarItemWithText() {
    bn.setTabBarItem({
      index: 2,
      text: this.data.apiText
    })
  },
  setAPIText(e) {
    this.setData({
      apiText: e.detail.value
    })
  },
  setTabBarVisible(visible) {
    this.setData({
      isTabBarVisible: visible
    })
  },
  toggleTabbar(animation) {
    console.log('toggle tabbar')
    if (this.data.isTabBarVisible) {
      bn.hideTabBar({ animation })
      this.setTabBarVisible(false)
    } else {
      bn.showTabBar({ animation })
      this.setTabBarVisible(true)
    }
  },
  toggleTabbarWithAnimation() {
    this.toggleTabbar(true)
  },
  toggleTabbarWithoutAnimation() {
    this.toggleTabbar(false)
  },
})
