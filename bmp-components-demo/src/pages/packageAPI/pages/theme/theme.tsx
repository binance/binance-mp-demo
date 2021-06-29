import * as React from 'react'
import { View, Text } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import { useTheme } from '../../../../common/themeContext'
import './theme.scss'

function Page() {
  const theme = useTheme()

  return (
    <View className='container'>
      <Head title='Theme'></Head>

      <View className='page-body'>
        <Text
          className={`theme-center ${
            theme === 'dark' ? 'theme-dark' : 'theme-light'
          }`}
        >
          SystemInfo.theme: {theme}
        </Text>
      </View>
    </View>
  )
}

export default withProviders(Page)
