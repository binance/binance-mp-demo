import * as React from 'react'
import {
  onBackgroundFetchData,
  getBackgroundFetchData,
  getBackgroundFetchToken as bnGetBackgroundFetchToken,
  setBackgroundFetchToken as bnSetBackgroundFetchToken
} from '@binance/mp-service'
import { View, Button, Text, Input } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './background-fetch.scss'

function Page() {
  const [token, setToken] = React.useState('')
  const [value, setValue] = React.useState('')
  const [logs, setLogs] = React.useState<
    { title: string; timeStamp: number; data: string }[]
  >([])

  function consoleLogs(title: string, data: Object) {
    setLogs(logs => [
      { title, timeStamp: Date.now(), data: JSON.stringify(data, null, 2) },
      ...logs
    ])
  }

  React.useEffect(() => {
    onBackgroundFetchData(({ fetchType, fetchedData, timeStamp }) => {
      consoleLogs(`[onBackgroundFetchData] callback`, {
        fetchType,
        fetchedData,
        timeStamp
      })
    })
  }, [])

  function getBackgroundFetchToken() {
    setLogs([])
    bnGetBackgroundFetchToken({})
      .then(args => {
        setToken(args.token)
        console.log(`[getBackgroundFetchToken] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchToken] fail`, args)
      })
  }

  function setBackgroundFetchToken() {
    setLogs([])
    bnSetBackgroundFetchToken({
      token: value
    })
      .then(args => {
        console.log(`[setBackgroundFetchToken] success`, args)
      })
      .catch(args => {
        console.log(`[setBackgroundFetchToken] fail`, args)
      })
  }

  function getBackgroundFetchDataPeriodic() {
    setLogs([])
    getBackgroundFetchData({
      fetchType: 'periodic'
    })
      .then(args => {
        console.log(`[getBackgroundFetchData] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchData] fail`, args)
      })
  }

  function getBackgroundFetchDataPre() {
    setLogs([])
    getBackgroundFetchData({
      fetchType: 'pre'
    })
      .then(args => {
        console.log(`[getBackgroundFetchData] success`, args)
      })
      .catch(args => {
        console.log(`[getBackgroundFetchData] fail`, args)
      })
  }

  return (
    <View className='container'>
      <Head title='Background fetch'></Head>

      <View className='page-body'>
        <Text className='bf-center'>
          <Input value={value} onInput={e => setValue(e.detail.value)} />
        </Text>
        <Text className='bf-center'>
          <Button onClick={setBackgroundFetchToken}>
            setBackgroundFetchToken
          </Button>
        </Text>
      </View>

      <View className='page-body'>
        <Text className='bf-center'>
          <Button onClick={getBackgroundFetchToken}>
            getBackgroundFetchToken
          </Button>
          <View className='page-section'>token: {token}</View>
        </Text>
      </View>

      <View className='page-body'>
        <Text className='bf-center'>
          <Button onClick={getBackgroundFetchDataPeriodic}>
            getBackgroundFetchData - periodic
          </Button>
        </Text>

        <Text className='bf-center'>
          <Button onClick={getBackgroundFetchDataPre}>
            getBackgroundFetchData - pre
          </Button>
        </Text>
      </View>

      <View className='page-body bf-logs'>
        {logs.map(({ title, timeStamp, data }, index) => (
          <View key={index}>
            {title} - {new Date(timeStamp).toLocaleString()} <br /> {data}
          </View>
        ))}
      </View>
    </View>
  )
}

export default withProviders(Page)
