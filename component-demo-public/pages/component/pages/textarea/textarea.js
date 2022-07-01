Page({
  data: {
    textareaValue: 'controlled',
    inputValue3: '',
    lineCount: 0,
    inputValue4: '1234567890',
    inputValue5: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    confirmType: 5,
    confirmTypes: [ 'send', 'search', 'next', 'go', 'done', 'return']
  },
  onLoad(query) {
    console.log('onload', this, query)
  },
  onShow() {
    console.log(`[LifeCycle][Textarea] useEffect`)
  },
  onReady() {
    console.log(`[LifeCycle][Textarea] useReady`)
  },
  onHide() {
    console.log(`[LifeCycle][Textarea] useDidHide`)
  },
  onTextareaValueInput(e) {
    this.setData({
      textareaValue: e.target.value
    })
    console.log(`[onTextareaValueInput] textarea`, e)
  },
  onInputValue3Click(e) {
    this.setData({
      inputValue3: e.target.value
    })
    console.log("[Textarea] Click", e)
  },
  onInputValue4Input(e) {
    this.setData({
      inputValue4: e.detail.value
    })
    console.log(`[onInputValue4Input] textarea`, e)
  },
  onInputValue4Focus(e) {
    console.log("[Textarea] bindfocus", e)
  },
  onInputValue4Blur(e) {
    console.log("[Textarea] bindblur", e)
  },
  onInputValue4Click(e) {
    console.log("[Textarea] Click", e)
  },
  onInputValue4Longpress(e) {
    console.log("[Textarea] longpress", e)
  },
  onInputValue4Confirm(e) {
    console.log("[Textarea] bindconfirm", e)
  },
  onInputValue4KeyboardHeightChange(e) {
    console.log("[Textarea] bindkeyboardheightchange", e)
  },
  onInputValue4LineChange(e) {
    console.log("[Textarea] bindlinechange", e)
  },
  onLineCountLineChange(e) {
    console.log("[Textarea] bindlinechange", e)
    this.setData({
      lineCount: e.detail.lineCount
    })
  },
  onInputValue5Input(e) {
    this.setData({
      inputValue5: e.detail.value
    })
    console.log(`[onInputValue5Input] textarea`, e)
  },
  onConfirmTypeChange(e) {
    this.setData({
      confirmType: e.detail.value === "string" ? parseInt(e.detail.value) : e.detail.value
    })
  },
})
