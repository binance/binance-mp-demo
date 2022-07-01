Component({
  data: {},
  lifetimes: {},
  methods: {
    goToView() {
      bn.navigateTo({
        url: "/pages/component/pages/view/view"
      })
    },
    goToAbout() {
      bn.navigateTo({
        url: "/pages/about/about"
      })
    }
  }
})
