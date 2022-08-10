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
  handleClickCheckbox(e) {
    console.log('[Click] Checkbox', e)
  },
  handleLongpressCheckbox(e) {
    console.log('[Click] Checkbox onLongPress', e)
  },
  handleClickLabel(e) {
    console.log('[Click] Label', e)
  },
  handleLongpressLabel(e) {
    console.log('[Click] Label onLongPress', e)
  },
  handleClickView(e) {
    console.log('[Click] view', e)
  },
  handleClickCheckboxGroup(e) {
    console.log('[Click] CheckboxGroup', e)
  },
  toggleChecked() {
    this.setData({
      checked: !this.data.checked
    })
  },
  checkboxChange(e) {
    console.log(
      '[CheckboxGroup] checkboxChange change event fired，value:',
      e.detail.value
    )

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  }
})
