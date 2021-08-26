import * as React from 'react'
import { getSystemInfo } from '@binance/mp-service'
import { View, Button } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import CustomNavigationBar from './CustomNavigationBar'
import { useTheme } from '../../../../common/themeContext'
import withProviders from '../../../../common/withProviders'
import './navigation.scss'

function Page() {
  const [loading, setLoading] = React.useState(false)
  const [show, setShow] = React.useState(true)
  const theme = useTheme()
  const [color, setColor] = React.useState(() =>
    theme === 'light' ? 'black' : 'white'
  )
  const [background, setBackground] = React.useState(() =>
    theme === 'light' ? 'white' : 'black'
  )
  const [safeAreaTop, setSafeAreaTop] = React.useState(0)

  React.useEffect(() => {
    setColor(theme === 'light' ? 'black' : 'white')
    setBackground(theme === 'light' ? 'white' : 'black')
    getSystemInfo().then(res => {
      setSafeAreaTop(res.safeArea.top)
    })
  }, [theme])

  return (
    <View className='container'>
      <CustomNavigationBar
        title='Custom Navigation Bar'
        loading={loading}
        show={show}
        color={color}
        background={background}
        back={true}
        paddingTop={safeAreaTop}
      />
      <Head title='Custom NavigationBar'></Head>

      <Button onClick={() => setLoading(!loading)}>Toggle loading</Button>
      <Button onClick={() => setShow(!show)}>Show / Hide</Button>
      <Button onClick={() => setColor('#07C160')}>Change color</Button>
      <Button onClick={() => setBackground('#ededed')}>
        Change background
      </Button>
    </View>
  )
}

export default withProviders(Page)
