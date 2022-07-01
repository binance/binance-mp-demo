Component({
  properties: {
    loading: {
      type: Boolean,
      value: false
    },
    show: {
      type: Boolean,
      value: false
    },
    color: {
      type: String,
      value: ""
    },
    background: {
      type: String,
      value: ""
    },
    title: {
      type: String,
      value: ""
    },
    back: {
      type: Boolean,
      value: false
    },
    paddingTop: {
      type: Number,
    }
  },
  method: {
    onNavigateBack() {
      bn.navigateBack()
    }
  }
})
