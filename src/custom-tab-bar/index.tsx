import React, { Component } from 'react'
import { switchTab } from '@binance/mp-service'
import { View, Image } from '@binance/mp-components'
import './index.scss'

const defaultState = {
  selected: 0,
  color: 'rgba(68, 68, 68, 1)',
  selectedColor: 'rgba(68, 68, 68, 1)',
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
}
class customTabBar extends Component<{}, typeof defaultState> {
  constructor() {
    super({})
    this.state = defaultState
  }
  switchTab(item: {
    pagePath: string
    text: string
    iconPath: string
    selectedIconPath: string
  }) {
    const url = '/' + item.pagePath
    switchTab({
      url: url
    })
  }

  render() {
    return (
      <View className='bottom-tab'>
        {this.state.list.map((item, index) => {
          return (
            <View
              className='bottom-tab-item'
              onClick={this.switchTab.bind(this, item)}
              data-path={item.pagePath}
              key={item.text}
            >
              <Image
                className='bottom-tab-item-img'
                src={
                  this.state.selected === index
                    ? item.selectedIconPath
                    : item.iconPath
                }
              />
              <View
                className='bottom-tab-item-text'
                style={{
                  color:
                    this.state.selected === index
                      ? this.state.selectedColor
                      : this.state.color
                }}
              >
                {item.text}
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default customTabBar
