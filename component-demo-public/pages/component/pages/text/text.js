Page({
  data: {
  },
  onLoad(query) {
    console.log('onload', this, query)
  },
  onShow() {
    console.log(`[LifeCycle][Text] useEffect`)
  },
  onReady() {
    console.log(`[LifeCycle][Text] useReady`)
  },
  onHide() {
    console.log(`[LifeCycle][Text] useDidHide`)
  },
  textClick(e) {
    console.log(`[Click] text`, e)
  },
  textLongpress(e) {
    console.log(`[Click] text bind:longpress`, e)
  },
  text2Click(e) {
    console.log(`[Click] text2`, e)
  },
  text2Longpress(e) {
    console.log(`[Click] text2 bind:longpress`, e)
  },
})
