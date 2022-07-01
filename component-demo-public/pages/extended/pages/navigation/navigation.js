Page({
  data: {
    loading: false,
    show: true,
    color: '#fff',  // 'light' ? 'black' : 'white'
    background: '#000',  // 'light' ? 'black' : 'white'
    safeAreaTop: 0,
    back: true,
    paddingTop: 20,
    title: "navigation"
  },
  onShow() {
    bn.getSystemInfo().then(res => {
      this.setData({
        safeAreaTop: res.safeArea.top
      })
    })
    /**
      TODO: theme
      React.useEffect(() => {
        setColor(theme === 'light' ? 'black' : 'white')
        setBackground(theme === 'light' ? 'white' : 'black')
        bn.getSystemInfo().then(res => {
          setSafeAreaTop(res.safeArea.top)
        })
      }, [theme])
     *
     */
  },
  onSetLoading() {
    console.log();
    this.setData({
      loading: !this.data.loading
    })
  },
  onSetShow() {
    this.setData({
      show: !this.data.show
    })
  },
  onSetColor() {
    this.setData({
      color: "#07C160"
    })
  },
  onSetBackground() {
    this.setData({
      background: "#ededed"
    })
  },
  onNavigateBack() {
    bn.navigateBack()
  }
})
