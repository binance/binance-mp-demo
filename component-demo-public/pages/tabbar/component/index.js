const list = [
  {
    id: 'view',
    name: 'View',
    open: false,
    pages: ['view', 'swiper', 'scroll-view', 'cover-view'],
    image: 'pages/tabbar/component/resources/kind/view.png'
  },
  {
    id: 'content',
    name: 'Content',
    open: false,
    pages: ['text', 'icon', 'rich-text'],
    image: 'pages/tabbar/component/resources/kind/content.png'
  },
  {
    id: 'form',
    name: 'Form',
    open: false,
    // 'radio',
    pages: [ 'checkbox', 'form', 'switch', 'textarea', 'picker', 'picker-view', 'radio', 'slider', 'editor'],
    image: 'pages/tabbar/component/resources/kind/form.png'
  },
  {
    id: 'media',
    name: 'Media',
    open: false,
    pages: ['video', 'image','native-image','nft-image', 'canvas', 'deprecated-canvas', 'chart'],
    image: 'pages/tabbar/component/resources/kind/media.png'
  },
  {
    id: 'open',
    name: 'Open Capabilities',
    open: false,
    pages: [
      'web-view',
      'web-view-custom-nav',
      'web-view-component',
      'web-view-no-bounce',
    ],
    image: 'pages/tabbar/component/resources/kind/open.png'
  }
]
Page({
  data: {
    list: []
  },
  onShow() {
    try {
      const launchOptionsSyncInfo = bn.getLaunchOptionsSync()
      console.log('[getLaunchOptionsSync] SUCCESS:', launchOptionsSyncInfo)

      const enterOptionsSyncInfo = bn.getEnterOptionsSync()
      console.log('[getEnterOptionsSync] SUCCESS:', enterOptionsSyncInfo)
    } catch (error) {
      console.warn('[component page] componentDidMount error', error)
    }
    this.setData({
      list
    }, () => {
      if (this.removeSkeleton) {
        this.removeSkeleton()
      }
    })
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
  testRendererIdZero() {
    const query = bn.createSelectorQuery()
    query
      .select('#test')
      .fields({node: true, size: true})
      .exec((res) => {
        bn.showToast({
          title: 'success!'
        })
      })
  }
})
