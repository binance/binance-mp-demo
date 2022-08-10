Page({
  formSubmit(e) {
    console.log('form fires submit event，data:', e.detail.value)
  },
  formReset(e) {
    console.log('form fires reset event，data:', e.detail.value)
  },
  handleInput(e) {
    console.log(`[${e.currentTarget.dataset.compname}] onInput`, e)
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
