Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: true },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' }
    ],
    checked: false
  },
  onRadioTap(e) {
    console.log("[Click] radio", e)
  },
  onRadioLongPress(e) {
    console.log("[Click] radio bind:longpress", e)
  },
  onLabelClick(e) {
    console.log("[Click] label", e)
  },
  onControlledLabelTap() {
    this.setData({ checked: !this.data.checked })
  },
  onControlledButtonTap() {
    this.setData({ checked: !this.data.checked })
  },
  radioChange(e){
    console.log('[RadioGroup] radio fires change event，value:', e.detail.value)
    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      items
    })
  },
  onRadioGroupTap(e) {
    console.log("[Click] RadioGroup", e)
  },
  onItemsRadioTap(e) {
    console.log("[Click] radio", e)
  },
  onItemsRadioLongpress(e) {
    console.log("[Click] radio bind:longpress", e)
  },
})
