import {
  usePullDownRefresh,
  stopPullDownRefresh,
  showLoading
} from '@binance/mp-service'
import React from 'react'
import { View } from '@binance/mp-components'
import withProviders from '../../../../common/withProviders'
import './pull-down-refresh.scss'

function Page() {
  // TODO: fix this
  usePullDownRefresh(() => {
    showLoading()
  })

  return (
    <View className='container'>
      <View
        className='btn'
        onClick={() => {
          stopPullDownRefresh()
          showLoading()
        }}
      >
        Stop refresh
      </View>
    </View>
  )
}

export default withProviders(Page)
