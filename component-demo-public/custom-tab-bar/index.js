Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        iconPath: 'image/icon_component.png',
        selectedIconPath: 'image/icon_component_HL.png',
        pagePath: 'pages/tabbar/component/index',
        text: 'Component'
      },
      {
        iconPath: 'image/icon_component.png',
        selectedIconPath: 'image/icon_component_HL.png',
        pagePath: 'pages/tabbar/extended/index',
        text: 'Extended'
      },
      {
        iconPath: 'image/icon_API.png',
        selectedIconPath: 'image/icon_API_HL.png',
        pagePath: 'pages/tabbar/API/index',
        text: 'API'
      }
    ]
  },
  attached() {
    console.log('tab-bar attached');
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      bn.switchTab({url})
    }
  }
})
