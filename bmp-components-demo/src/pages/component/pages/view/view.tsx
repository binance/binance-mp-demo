import React from 'react'
import { View, Text } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './view.scss'

class Page extends React.Component {
  render() {
    return (
      <View className='container'>
        <Head title='view'></Head>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: row</Text>
              <Text> Horizontal Layout</Text>
            </View>
            <View className='page-section-spacing'>
              <View className='flex-wrp' style='flex-direction:row;'>
                <View className='flex-item demo-text-1'></View>
                <View className='flex-item demo-text-2'></View>
                <View className='flex-item demo-text-3'></View>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: column</Text>
              <Text>Vertical Layout</Text>
            </View>
            <View className='flex-wrp' style='flex-direction:column;'>
              <View className='flex-item flex-item-V demo-text-1'></View>
              <View className='flex-item flex-item-V demo-text-2'></View>
              <View className='flex-item flex-item-V demo-text-3'></View>
            </View>
          </View>

          <View className='page-section'>
            <View className='page-section-title'>onClick / onLongPress</View>
            <View className='flex-wrp' style='flex-direction:column;'>
              <View
                onClick={e => console.log('[View] onClick', e)}
                onLongPress={e => console.log('[View] onLongPress', e)}
                className='flex-item flex-item-V demo-text-1'
              >
                tap me
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
