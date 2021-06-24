import * as React from 'react'
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

  React.useEffect(() => {
    setColor(theme === 'light' ? 'black' : 'white')
    setBackground(theme === 'light' ? 'white' : 'black')
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
