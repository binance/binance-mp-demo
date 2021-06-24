import * as React from 'react'
import { View, Input, Button } from '@binance/mp-components'
import { setTabBarItem } from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './set-tab-bar.scss'

function Page() {
  const [apiText, setAPIText] = React.useState('API 接口')

  return (
    <View className='container'>
      <Head title='NavigationBar'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <View className='bnui-cells__title'>setTabBarItem</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_Input tabBar-input-wrapper'>
              <View>Set text</View>
              <Input
                className='bnui-Input'
                value={apiText}
                onInput={e => setAPIText(e.detail.value)}
              />
              <Button
                onClick={() =>
                  setTabBarItem({
                    index: 2,
                    text: apiText
                  })
                }
              >
                send
              </Button>
            </View>
            <small>{`setTabBarItem({
                    index: 2,
                    text: ${apiText}
                  })`}</small>
          </View>

          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_Input tabBar-input-wrapper'>
              <View>Set iconPath</View>
              <Button
                onClick={() =>
                  setTabBarItem({
                    index: 0,
                    iconPath: 'image/icon_API.png'
                  })
                }
              >
                send
              </Button>
            </View>
            <small>{`setTabBarItem({
                    index: 0,
                    iconPath: 'image/icon_API.png'
                  })`}</small>
          </View>

          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_Input tabBar-input-wrapper'>
              <View>Set iconPath from internet</View>
              <Button
                onClick={() =>
                  setTabBarItem({
                    index: 0,
                    iconPath:
                      'https://github.githubassets.com/images/icons/emoji/tada.png'
                  })
                }
              >
                send
              </Button>
            </View>
            <small>{`setTabBarItem({
                    index: 0,
                    iconPath:
                      'https://github.githubassets.com/images/icons/emoji/tada.png'
                  })`}</small>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
