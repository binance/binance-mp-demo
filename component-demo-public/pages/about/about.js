Component({
  data: {},
  lifetimes: {},
  methods: {
    goToView() {
      bn.navigateTo({
        url: "/pages/component/pages/view/view"
      })
    },
    goToWelcome() {
      bn.navigateTo({
        url: "/pages/welcome/welcome"
      })
    }
  }
})
