import React, { Component, useCallback, useState } from 'react'
import { View, Navigator, Image, Picker } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './picker.scss'

function Page() {
  const array = ['中国', '美国', '巴西', '日本']
  const [index, setIndex] = useState(0)
  const [date, setDate] = useState('2016-09-01')
  const [time, setTime] = useState('12:01')
  const pickerChange = useCallback(e => {
    setIndex(e.detail.value)
  }, [])
  return (
    <View className='container'>
      <Head title='Picker'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <View className='bnui-cells__title'>地区选择器</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <View className='bnui-cell__hd'>
                <View className='bnui-label'>当前选择</View>
              </View>
              <View className='bnui-cell__bd'>
                <Picker
                  onChange={pickerChange}
                  value={index}
                  range={array}
                  mode='selector'
                >
                  <View className='bnui-input'>{array[index]}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View className='bnui-cells__title'>Time Picker</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <View className='bnui-cell__hd'>
                <View className='bnui-label'>Current</View>
              </View>
              <View className='bnui-cell__bd'>
                <Picker
                  mode='time'
                  value={time}
                  start='09:01'
                  end='21:01'
                  onChange={e => {
                    setTime(e.detail.value)
                  }}
                >
                  <View className='bnui-input'>{time}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View className='bnui-cells__title'>Date Picker</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <View className='bnui-cell__hd'>
                <View className='bnui-label'>Current</View>
              </View>
              <View className='bnui-cell__bd'>
                <Picker
                  mode='date'
                  value={date}
                  start='2015-09-01'
                  end='2017-09-01'
                  onChange={e => {
                    setDate(e.detail.value)
                  }}
                >
                  <View className='bnui-input'>{date}</View>
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
