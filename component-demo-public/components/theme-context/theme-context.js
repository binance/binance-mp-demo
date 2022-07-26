
Component({
  data: {
    theme: "light"
  },

  lifetimes: {
    created() {
      console.log('created');

    },
    ready() {
    },
    moved() {
      console.log('moved')
    },

    detached() {
      console.log('detached')
      bn.offThemeChange(this.onThemeChange)
    },
    error() {
      console.log('error')
    },
    attached: function () {
      this.getSystemInfo()
      // bn.onThemeChange(this.onThemeChange)
      bn.onThemeChange(res => {
        this.setData({
          theme: res.theme
        })
      })
    },
  },
  // methods: {
    getSystemInfo: function() {
      try {
        const res = bn.getSystemInfoSync()
        if (res.theme) {
          console.log('bn.getSystemInfo()', res.theme);
          this.setData({
            theme: res.theme
          })
        }
      } catch (error) {
        console.error(error)
      }
    },
    onThemeChange: function(payload) {
      console.log(`[Theme] onThemeChange`, payload)
      this.setData({
        theme: payload.theme
      })
    },
  // },
})
