import * as React from 'react'
import { View, Button, Input, Text } from '@binance/mp-components'
import {
  setClipboardData as bnSetClipboardData,
  getClipboardData as bnGetClipboardData
} from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './clipboard-data.scss'

function Page() {
  const [data, setData] = React.useState<string>('clipboard-data')
  const [showData, setShowData] = React.useState<string>('')

  function onInput(e) {
    setData(e.detail.value)
  }

  function setClipboardData() {
    return bnSetClipboardData({ data })
  }

  function getClipboardData() {
    return bnGetClipboardData()
      .then(res => setShowData(res.data))
      .catch(err => console.log('getClipboardData-error', err))
  }

  return (
    <View>
      <Head title='ClipboardData'></Head>
      <View>
        <View className='clip-center'>
          <View>
            <Input
              className='clip-input'
              value={data}
              onInput={onInput}
              placeholder='Please input'
            />
          </View>

          <View>
            <Button onClick={setClipboardData}>setClipboardData</Button>
          </View>

          <View>
            <Text>{showData}</Text>
          </View>

          <View>
            <Button onClick={getClipboardData}>getClipboardData</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
