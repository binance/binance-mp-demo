
Component({
  properties: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    }
  },
  created() {
    console.log('created')
  },
  attached() {
    console.log('attached')
  },
  ready() {
    console.log('ready')
  },
  moved() {
    console.log('moved')
  },

  detached() {
    console.log('detached')
  },
  error() {
    console.log('error')
  },

  data: {
    // isComponentA: true,
  },

  lifetimes: {
    created() {
      console.log('created')
    },
    attached() {
      console.log('attached')
    },
    ready() {
      console.log('ready')
    },
    moved() {
      console.log('moved')
    },

    detached() {
      console.log('detached')
    },
    error() {
      console.log('error')
    },
    attached: function () {
      console.log('[Comp] a attached', this.data, this)
    },
    detached: function () {
      console.log('[Comp] a detached', this.data, this)
    },
  },
  methods: {
    onClick(e) {
      bn.navigateTo({ url: '/pages/about/about' })
    },
  },
})
