import React from 'react'
import { View } from '@binance/mp-components'

export interface HeadProps {
  title: string
  desc?: string
}

export function Head({ title, desc }: HeadProps) {
  return (
    <View className='page-head'>
      <View className='page-head-title'>{title}</View>
      <View className='page-head-line'></View>
      {desc && <View className='page-head-desc'>{desc}</View>}
    </View>
  )
}
