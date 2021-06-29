import * as React from 'react'
import { WebView } from '@binance/mp-components'
import withProviders from '../../../../common/withProviders'

function Page() {
  return (
    <WebView
      src='https://github.com/binance'
      onLoad={e => console.log('[WebView] onLoad', e.detail)}
      onError={e => console.log('[WebView] onError', e.detail)}
    />
  )
}

export default withProviders(Page)
