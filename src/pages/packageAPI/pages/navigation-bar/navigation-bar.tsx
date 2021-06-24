import React, { useEffect, useState } from 'react'
import {
  setNavigationBarTitle,
  setNavigationBarColor
} from '@binance/mp-service'
import { View, Input, Button } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './navigation-bar.scss'

function Page() {
  const [title, setTitle] = useState('title')
  useEffect(() => {
    setNavigationBarTitle({ title })
  }, [title])

  return (
    <View className='container'>
      <Head title='NavigationBar'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <View className='bnui-cells__title'>Change Title</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_Input'>
              <Input
                className='bnui-Input'
                onInput={e => {
                  setTitle(e.detail.value)
                }}
                placeholder='Title'
              />
            </View>
          </View>
        </View>
        <View className='page-section'>
          <View className='bnui-cells__title'>Change Color</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell'>
              <Button
                type='primary'
                onClick={() =>
                  setNavigationBarColor({
                    frontColor: '#000000',
                    backgroundColor: '#ffffff'
                  })
                }
              >
                Set Color
              </Button>
            </View>
          </View>
          <View className='bnui-cells__title'>Change Color</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell'>
              <Button
                type='primary'
                onClick={() =>
                  setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#000000',
                    animation: {
                      duration: 330,
                      timingFunc: 'easeIn'
                    }
                  })
                }
              >
                Set Color with Animation
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
