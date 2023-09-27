Page({
  data: {
    props: {
      title: 'Hello World',
    },
    typeIndex: 0,
    typeOptions: ['alert', 'sheet'],
    maskClosableIndex: 0,
    maskClosableOptions: ['true', 'false'],
    width: '',
    height: '',
    show: true,
  },
  toggle() {
    this.setData({ show: !this.data.show })
  },
  handleWidthInput(e) {
    this.setData({
      width: e.detail.value
    })
  },
  handleHeightInput(e) {
    this.setData({
      height: e.detail.value
    })
  },
  handleTypeChange(e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  handleMaskClosableChange(e) {
    this.setData({
      maskClosableIndex: e.detail.value
    })
  },
  closeWidget() {
    bn.closeWidget({ id: this.id })
  },
  async openWidget() {
    const options = {
      path: 'widgets/clock-widget/index',
      appId: 'N6QyfEJN5fHFb94HjB4mTG',
      props: this.data.props,
      type: this.data.typeOptions[this.data.typeIndex],
      maskClosable: this.data.maskClosableOptions[this.data.maskClosableIndex] === 'true' ? true : false,
      onClose: () => {
        console.log('widget closed')
      },
    }
    if (this.data.width) {
      options.width = Number(this.data.width)
    }
    if (this.data.height) {
      options.height = Number(this.data.height)
    }
    console.log('open widget options', options)
    const { id } = await bn.openWidget(options)
    this.id = id
  }
});
