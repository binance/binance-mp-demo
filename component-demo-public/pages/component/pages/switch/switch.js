Page({
  data: {
    checked: false
  },
  onLoad(query) {
    console.log('onload', this, query)
  },

  onShow() {
    console.log('onShow', this.data)
  },
  onReady() {
    console.log('onReady')
  },
  onHide() {
    console.log('onHide')
  },
  switchChange(e) {
    console.log('switch fire change event, value:', e.detail.value)
  },
  switchClick(e) {
    console.log(`[Click] switch`, e)
  },
  onToggleClick() {
    this.setData({ checked: !this.data.checked })
  },
  switchLongpress(e) {
    console.log(`[Click] switch bind:longpress`, e)
  },
  switch1Change(e) {
    console.log('switch1 fire change event, value:', e.detail.value)
  },
  switch1Click(e) {
    console.log(`[Click] switch`, e)
  },
  switch1Longpress(e) {
    console.log(`[Click] switch bind:longpress`, e)
  },

  switch2Change(e) {
    console.log('switch2 fire change event, value:', e.detail.value)
  },
  switch2Click(e) {
    console.log(`[Click] switch`, e)
  },
  switch2Longpress(e) {
    console.log(`[Click] switch bind:longpress`, e)
  },
})
