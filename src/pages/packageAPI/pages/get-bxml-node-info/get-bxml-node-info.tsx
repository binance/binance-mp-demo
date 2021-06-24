import { View, Text } from '@binance/mp-components'
import { createSelectorQuery } from '@binance/mp-service'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './get-bxml-node-info.scss'

class Page extends React.Component {
  state: {
    x: number
    y: number
    metrics: Array<{ key: string; val: string }>
  } = {
    x: 0,
    y: 0,
    metrics: []
  }

  getNodeInfo = () => {
    const $ = createSelectorQuery()
    const target = $.select('.target')
    target.boundingClientRect()

    $.exec(res => {
      const rect = res[0]
      if (rect) {
        const metrics: Array<{ key: string; val: string }> = []
        // eslint-disable-next-line
        for (const key in rect) {
          if (key !== 'id' && key !== 'dataset') {
            const val = rect[key]
            metrics.push({ key, val })
          }
        }

        this.setState({ metrics })
      }
    })
  }
  render() {
    const { x, y, metrics } = this.state
    return (
      <View className='container'>
        <Head title='createSelectorQuery'></Head>
        <View className='page-body'>
          <View className='page-section'>
            <View className='node-container'>
              <View className='target' onClick={this.getNodeInfo}>
                Click Me
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='metric'>
              {metrics.map(item => {
                return (
                  <View key={item.key}>
                    <Text className='b'>{item.key}</Text>
                    <Text className='span'>{item.val}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
