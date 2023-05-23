Page({
  data: {
    list: [
      {
        id: 'nav',
        name: 'Navigation',
        open: false,
        pages: ['navigation'],
        image: 'pages/tabbar/extended/resources/kind/nav.png'
      },
      {
        id: 'polyfill',
        name: 'Polyfill',
        open: false,
        pages: ['promise'],
        image: 'pages/tabbar/extended/resources/kind/nav.png'
      },
      {
        id: 'bns',
        name: 'Bns',
        open: false,
        pages: ['bns'],
        image: 'pages/tabbar/extended/resources/kind/nav.png'
      }
      // {
      //   id: 'eventChannel',
      //   name: 'Event Channel',
      //   open: false,
      //   pages: ['event-channel'],
      //   image: 'pages/tabbar/extended/resources/kind/nav.png'
      // },
      // {
      //   id: 'share',
      //   name: 'Share App',
      //   open: false,
      //   pages: ['share'],
      //   image: 'pages/tabbar/extended/resources/kind/nav.png'
      // },
      // {
      //   id: 'beforeAppClose',
      //   name: 'Before app close',
      //   open: false,
      //   pages: ['before-app-close'],
      //   image: 'pages/tabbar/extended/resources/kind/nav.png'
      // }
    ]
  },
  onShow() {
    console.log('page show')
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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
  handleClick(e) {
    const page = e.currentTarget.dataset.page
    bn.navigateTo({
      url: `pages/extended/pages/${page}/${page}`,
      events: {
        acceptDataFromOpenedPage: data =>
          console.log('[Received response]', data)
      }
    }).then(res => {
      if (page === 'event-channel' && res.eventChannel) {
        const { eventChannel } = res
        setInterval(
          () =>
            eventChannel.emit &&
            eventChannel.emit('acceptDataFromOpenerPage', {
              data: Date.now()
            }),
          1000
        )
      }
    })
  }
})
