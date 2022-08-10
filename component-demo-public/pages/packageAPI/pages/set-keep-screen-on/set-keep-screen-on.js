Page({
  async onClickOn() {
    try {
      await bn.setKeepScreenOn({ keepScreenOn: true })
      bn.showModal({ title: 'Success', content: 'keepScreenOn: true' })
    } catch (error) {
      console.log('setKeepScreenOn - error', error)
      bn.showModal({
        title: 'fail',
        content: `error: ${JSON.stringify(error)}`
      })
    }
  },
  async onClickOff() {
    try {
      await bn.setKeepScreenOn({ keepScreenOn: false })
      bn.showModal({ title: 'Success', content: 'keepScreenOn: false' })
    } catch (error) {
      console.log('setKeepScreenOn - error', error)
      bn.showModal({
        title: 'fail',
        content: `error: ${JSON.stringify(error)}`
      })
    }
  }
})
