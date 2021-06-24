import * as React from 'react'
import { View, Button, Text } from '@binance/mp-components'
import { getPerformance } from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './get-performance.scss'

function Page() {
  const performanceRef = React.useRef<any>()
  const [entries, setEntries] = React.useState<any[]>([])

  React.useEffect(() => {
    performanceRef.current = getPerformance()
  }, [])

  function getPerformanceEntries() {
    const entries = performanceRef.current.getEntries()
    setEntries(entries)
  }

  return (
    <View className='container'>
      <Head title='Get performance'></Head>
      <View className='page-body'>
        <Text className='perf-center'>
          <View className='page-section'>
            <Button onClick={getPerformanceEntries}>
              Get performance entries
            </Button>
          </View>
        </Text>
      </View>

      <View className='page-section'>
        {entries.map((entry, index) => (
          <View key={index} className='perf-entry-wrapper'>
            <View className='perf-entry-property'>
              <View>entryType</View>
              <View>{entry.entryType}</View>
            </View>
            <View className='perf-entry-property'>
              <View>name</View>
              <View>{entry.name}</View>
            </View>
            <View className='perf-entry-property'>
              <View>navigationType</View>
              <View>{entry.navigationType}</View>
            </View>
            <View className='perf-entry-property'>
              <View>navigationStart</View>
              <View>{entry.navigationStart}</View>
            </View>
            <View className='perf-entry-property'>
              <View>path</View>
              <View>{entry.path}</View>
            </View>
            <View className='perf-entry-property'>
              <View>startTime</View>
              <View>{entry.startTime}</View>
            </View>
            <View className='perf-entry-property'>
              <View>duration</View>
              <View>{entry.duration}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default withProviders(Page)
