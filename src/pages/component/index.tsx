import React, { Component } from 'react'
import { View, Navigator, Image } from '@binance/mp-components'
import withProviders from '../../common/withProviders'
import { kind } from './resources'
import './index.scss'

const list = [
  {
    id: 'view',
    name: 'View',
    open: false,
    pages: ['view', 'scroll-view'],
    image: kind.view
  },
  {
    id: 'content',
    name: 'Content',
    open: false,
    pages: ['rich-text'],
    image: kind.content
  },
  {
    id: 'form',
    name: 'Form',
    open: false,
    pages: [
      'button',
      'checkbox',
      'form',
      'input',
      'label',
      'picker',
      'radio',
      'slider',
      'switch',
      'textarea'
    ],
    image: kind.form
  },
  // {
  //   id: 'nav',
  //   name: 'Navigation',
  //   open: false,
  //   pages: ['navigator'],
  //   image: kind.nav
  // }
  {
    id: 'media',
    name: 'Media',
    open: false,
    pages: ['image', 'video'],
    image: kind.media
  },
  {
    id: 'open',
    name: 'Open Capabilities',
    open: false,
    pages: [
      // 'ad',
      // 'open-data',
      'web-view'
    ],
    image: kind.open
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
          <View className='index-desc'>Mini Program Component Demos</View>
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
                        url={`pages/component/pages/${page}/${page}`}
                        className='navigator'
                        key={page}
                      >
                        <View className='navigator-text'>{page}</View>
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
