import React, { Component } from 'react'
import { View, Navigator, Image } from '@binance/mp-components'
import withProviders from '../../common/withProviders'
import { kind } from './resources'
import './index.scss'

const list = [
  // {
  //   id: 'view',
  //   name: 'View',
  //   open: false,
  //   pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view'],
  //   image: kind.view
  // },
  // {
  //   id: 'content',
  //   name: 'Content',
  //   open: false,
  //   pages: ['text', 'icon', 'progress', 'rich-text'],
  //   image: kind.content
  // },
  {
    id: 'api',
    name: 'Open API',
    open: false,
    pages: [
      {
        title: 'Binance Login',
        url: 'login/login'
      }
    ],
    image: kind.api
  },
  {
    id: 'page',
    name: 'User Interface',
    open: false,
    pages: [
      {
        title: 'Navigation Bar',
        url: 'navigation-bar/navigation-bar'
      },
      {
        title: 'Set TabBar',
        url: 'set-tab-bar/set-tab-bar'
      },
      {
        title: 'Pull to refresh',
        url: 'pull-down-refresh/pull-down-refresh'
      },
      {
        title: 'Get BXML Node Info',
        url: 'get-bxml-node-info/get-bxml-node-info'
      },
      {
        title: 'Theme',
        url: 'theme/theme'
      }
    ],
    image: kind.page
  },
  {
    id: 'performance',
    name: 'Performance',
    open: false,
    pages: [
      {
        title: 'Get performance',
        url: 'get-performance/get-performance'
      }
    ],
    image: kind.performance
  },
  {
    id: 'networking',
    name: 'Networking',
    open: false,
    pages: [
      {
        title: 'Request',
        url: 'request/request'
      },
      {
        title: 'WebSocket',
        url: 'websocket/websocket'
      }
    ],
    image: kind.api
  },
  {
    id: 'storage',
    name: 'Storage',
    open: false,
    pages: [
      {
        title: 'Background fetch',
        url: 'background-fetch/background-fetch'
      }
    ],
    image: kind.storage
  },
  {
    id: 'device',
    name: 'Device',
    open: false,
    pages: [
      {
        title: 'ClipboardData',
        url: 'clipboard-data/clipboard-data'
      }
    ],
    image: kind.device
  }
]

class Index extends Component<{}, { list: typeof list }> {
  componentWillMount() {
    this.setState({ list })
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log('page unmount')
  }

  componentDidShow() {
    console.log('page show')
  }

  componentDidHide() {
    console.log('page hide')
  }

  kindToggle(id: string) {
    const nextList = this.state.list.map(item => {
      if (item.id !== id) return item
      return { ...item, open: !item.open, name: item.name }
    })
    this.setState({
      list: nextList
    })
  }

  render() {
    return (
      <View className='index'>
        <View className='index-hd'>
          <View className='index-desc'>Mini Program API Demos</View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {this.state.list.map(item => (
              <View
                className='kind-list-item'
                key={item.id}
                onClick={() => this.kindToggle(item.id)}
              >
                <View
                  id={`${item.id}`}
                  className={`kind-list-item-hd ${
                    item.open ? 'kind-list-item-hd-show' : ''
                  }`}
                >
                  <View className='kind-list-text'>{item.name}</View>
                  <Image className='kind-list-img' src={item.image}></Image>
                </View>
                <View
                  className={`kind-list-item-bd ${
                    item.open ? 'kind-list-item-bd-show' : ''
                  }`}
                >
                  <View
                    className={`navigator-box ${
                      item.open ? 'navigator-box-show' : ''
                    }`}
                  >
                    {item.pages.map(page => (
                      <Navigator
                        url={`pages/packageAPI/pages/${page.url}`}
                        className='navigator'
                        key={page.title}
                      >
                        <View className='navigator-text'>{page.title}</View>
                        <View className='navigator-arrow'></View>
                      </Navigator>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Index)
