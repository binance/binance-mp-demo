
Component({
  data: {
    count: 0
  },
  methods: {
    onClick() {
      this.setData({
        count: this.data.count + 1
      })
    },
  },
})
