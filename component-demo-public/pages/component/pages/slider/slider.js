Page({
  data: {
    controlledValue: 50
  },
  sliderChange(e) {
    console.log('slider fire change event，value:', e.detail.value)
  },
  sliderClick(e) {
    console.log('slider fire click event，value:', e.detail.value)
  },
  sliderLonePress(e) {
    console.log('slider fire lonePress event，value:', e.detail.value)
  },
  onControlledValueChange(e) {
    console.log('slider fire change event，value:', e.detail.value)
    this.setData({
      controlledValue: e.detail.value
    })
  }
})
