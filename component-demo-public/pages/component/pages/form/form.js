Page({
  data: {
    inputValue1: 'test',
    inputValue2: 'test',
  },
  formSubmit(e) {
    console.log('form fires submit event，data:', e.detail.value)
  },
  formReset(e) {
    console.log('form fires reset event，data:', e.detail.value)
  },
  handleInput(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onInput`, e)
  },
  handleInput1(e) {
    this.setData({
      inputValue1: e.detail.value
    })
    e.control?.({value: e.detail.value})
  },
  handleInput2(e) {
    const that = this
    setTimeout(() => {
      that.setData({
        inputValue2: e.detail.value
      })
      e.control?.({value: e.detail.value})
    }, 1000)
  },
  handleFocus(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onFocus`, e)
  },
  handleBlur(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onBlur`, e)
  },
  handClick(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onClick`, e)
  },
  handleConfirm(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onConfirm`, e)
  },
  handleKeyboardHeightChange(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onKeyboardHeightChange`, e)
  }
})
