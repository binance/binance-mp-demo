export default {
  darkmode: true,
  entryPage: 'pages/component/index',
  pages: [
    'pages/component/index',
    'pages/component/pages/button/button',
    'pages/component/pages/checkbox/checkbox',
    'pages/component/pages/form/form',
    'pages/component/pages/input/input',
    'pages/component/pages/label/label',
    'pages/component/pages/textarea/textarea',
    'pages/component/pages/picker/picker',
    'pages/component/pages/radio/radio',
    'pages/component/pages/image/image',
    'pages/component/pages/video/video',
    'pages/component/pages/web-view/web-view',
    'pages/component/pages/view/view',
    'pages/component/pages/scroll-view/scroll-view',
    'pages/component/pages/slider/slider',
    'pages/component/pages/switch/switch',
    'pages/component/pages/rich-text/rich-text',
    'pages/API/index',
    'pages/packageAPI/pages/navigation-bar/navigation-bar',
    'pages/packageAPI/pages/login/login',
    'pages/packageAPI/pages/pull-down-refresh/pull-down-refresh',
    'pages/packageAPI/pages/set-tab-bar/set-tab-bar',
    'pages/packageAPI/pages/theme/theme',
    'pages/packageAPI/pages/request/request',
    'pages/packageAPI/pages/websocket/websocket',
    'pages/packageAPI/pages/get-performance/get-performance',
    'pages/packageAPI/pages/background-fetch/background-fetch',
    'pages/packageAPI/pages/get-bxml-node-info/get-bxml-node-info',
    'pages/packageAPI/pages/clipboard-data/clipboard-data',
    'pages/extended/index',
    'pages/extended/pages/navigation/navigation'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTitleText: 'Mini Program',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle'
  },
  tabBar: {
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    list: [
      {
        iconPath: 'image/icon_component.png',
        selectedIconPath: 'image/icon_component_HL.png',
        pagePath: 'pages/component/index',
        text: 'Component'
      },
      {
        iconPath: 'image/icon_component.png',
        selectedIconPath: 'image/icon_component_HL.png',
        pagePath: 'pages/extended/index',
        text: 'Extended'
      },
      {
        iconPath: 'image/icon_API.png',
        selectedIconPath: 'image/icon_API_HL.png',
        pagePath: 'pages/API/index',
        text: 'API'
      }
    ]
  },
  themeLocation: './theme.json'
}
