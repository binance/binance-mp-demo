import React, { useCallback } from 'react'
import { View, Button, Text } from '@binance/mp-components'
import { request } from '@binance/mp-service'
import './request.scss'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'

function Page() {
  const sendRequest = useCallback(async () => {
    request({
      url: 'https://www.metaweather.com/api/location/44418',
      // to use this demo, please replace headers below to your self headers.
      headers: {},
      method: 'GET'
    })
  }, [])

  return (
    <View className='container'>
      <Head title='Request'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <Text>send request to server</Text>
        </View>
        <View className='page-section'>
          <Button onClick={sendRequest}>request</Button>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
