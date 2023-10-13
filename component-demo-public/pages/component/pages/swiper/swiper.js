const colorList = ['yellow', 'red', 'orange', 'green']

Page({
  data: {
    bgColorGroups: [],
    indicatorDots: true,
    isAutoplay: false,
    circular: true,
    vertical: false,
    indicatorColor: 'white',
    indicatorActiveColor: 'black', // *
    current: 0,
    easingFunction: this.easingFunction,
    displayMultipleItems: 1,
    indicatorColorInput: 'white',
    indicatorActiveColorInput: 'black',
    currentInput: 0,
    easingFunctionInput: 'linear',
    interval: 3000,
    intervalInput: 3000,
    duration: 200,
    durationInput: 200,
    displayMultipleItemsInput: 1
  },
  onLoad(query) {
    console.log('onload', this, query)
  },

  onShow() {
    console.log('onShow', this.data)
  },
  onReady() {
    console.log('onReady')
    setTimeout(() => {
      this.setData({
        bgColorGroups: [...colorList]
      })
    })
  },
  onHide() {
    console.log('onHide')
  },
  onTabItemTap(payload) {
    console.log('onTabItemTap', payload)
  },
  // swiper page method
  onAutoPlayChange: function() {
    this.setData({ isAutoplay: !this.data.isAutoplay })
  },
  onCircularChange() {
    this.setData({ circular: !this.data.circular })
  },
  onVerticalChange() {
    this.setData({ vertical: !this.data.vertical })
  },
  onIndicatorDotsChange() {
    this.setData({ indicatorDots: !this.data.indicatorDots })
  },
  onIndicatorColorInput(e) {
    this.setData({ indicatorColorInput: e.detail.value })
  },
  onIndicatorColorClick() {
    this.setData({
      indicatorColor: this.data.indicatorColorInput
    })
  },
  onIndicatorActiveColorInput(e) {
    this.setData({ indicatorActiveColorInput: e.detail.value })
  },
  onindicatorActiveColorClick() {
    this.setData({
      indicatorActiveColor: this.data.indicatorActiveColorInput
    })
  },
  onCurrentinputInput(e) {
    this.setData({ currentInput: Number(e.detail.value) })
  },
  onCurrentinputClick() {
    this.setData({
      current: this.data.currentInput
    })
  },
  onEasingFunctioninputInput(e) {
    this.setData({ easingFunctionInput: e.detail.value })
  },
  onEasingFunctioninputClick() {
    this.setData({
      easingFunction: this.data.easingFunctionInput
    })
  },
  onIntervalinputInput(e) {
    this.setData({ intervalInput: Number(e.detail.value) })
  },
  onIntervalinputClick() {
    this.setData({
      interval: this.data.intervalInput
    })
  },
  onDurationinputInput(e) {
    this.setData({ durationInput: Number(e.detail.value) })
  },
  onDurationinputClick() {
    this.setData({
      duration: this.data.durationInput
    })
  },
  onDisplayMultipleItemsinputInput(e) {
    this.setData({ displayMultipleItemsInput: e.detail.value })
  },
  onDisplayMultipleItemsinputClick() {
    this.setData({
      displayMultipleItems: this.data.displayMultipleItemsInput
    })
  },
  onAddBgColorGroupsClick() {
    const newBgColorGroups = [...this.data.bgColorGroups]
    newBgColorGroups.push("black")
    this.setData({ bgColorGroups: newBgColorGroups })
  },
  onRemoveBgColorGroupsClick() {
    const newBgColorGroups = [...this.data.bgColorGroups]
    newBgColorGroups.length > 0 && newBgColorGroups.pop()
    this.setData({ bgColorGroups: newBgColorGroups })
  },


  onChange(e) {
    console.log('[View] onClick', e)
  },
  onTransition(e) {
    console.log('[View] onLongPress', e)
  },
  onAnimationfinish(e) {
    console.log('[View] onTouchStart', e)
  },
})
