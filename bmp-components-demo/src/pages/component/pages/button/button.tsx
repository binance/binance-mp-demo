import React from 'react'
import { View, Button } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './button.scss'

const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },

  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  }
}

for (let i = 0; i < types.length; ++i) {
  ;(function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

class Page extends React.Component {
  render() {
    return (
      <View className='container'>
        <Head title='button'></Head>
        <View
          className='page-body'
          onClick={e => console.log(`[Click] View`, e)}
          onLongPress={e => console.log(`[Click] onLongPress`, e)}
        >
          <View className='btn-area' id='buttonContainer'>
            <View className='page-section-title'>Primary</View>
            <Button
              id='button-1234'
              type='primary'
              className='button'
              onClick={e => console.log(`[Click] button`, e)}
            >
              <View onClick={e => console.log(`[Click] inner View`, e)}>
                Primary Normal
              </View>
            </Button>
            <Button type='primary' loading>
              Primary Loading
            </Button>
            <Button type='primary' disabled>
              Primary Disabled
            </Button>
            <Button className='mini-btn' type='primary' size='mini'>
              Mini button
            </Button>

            <View className='page-section-title'>Default</View>
            <Button type='default'>Default Normal</Button>
            <Button type='default' loading>
              Default Loading
            </Button>
            <Button type='default' disabled>
              Default Disabled
            </Button>
            <Button className='mini-btn' type='default' size='mini'>
              Mini button
            </Button>

            <View className='page-section-title'>Warn</View>
            <Button type='warn'>Warn Normal</Button>
            <Button type='warn' loading>
              Warn Loading
            </Button>
            <Button type='warn' disabled>
              Warn Disabled
            </Button>
            <Button className='mini-btn' type='warn' size='mini'>
              Mini button
            </Button>

            <View className='page-section-title'>Primary plain</View>
            <Button type='primary' plain>
              Primary plain Normal
            </Button>
            <br />
            <Button type='primary' loading plain>
              Primary plain Loading
            </Button>
            <br />
            <Button type='primary' disabled plain>
              Primary plain Disabled
            </Button>
            <br />
            <Button className='mini-btn' type='primary' size='mini' plain>
              Mini button
            </Button>

            <View className='page-section-title'>Default plain</View>
            <Button type='default' plain>
              Default plain Normal
            </Button>
            <br />
            <Button type='default' loading plain>
              Default plain Loading
            </Button>
            <br />
            <Button type='default' disabled plain>
              Default plain Disabled
            </Button>
            <br />
            <Button className='mini-btn' type='default' size='mini' plain>
              Mini button
            </Button>

            <View className='page-section-title'>Warn plain</View>
            <Button type='warn' plain>
              Warn plain Normal
            </Button>
            <br />
            <Button type='warn' loading plain>
              Warn plain Loading
            </Button>
            <br />
            <Button type='warn' disabled plain>
              Warn plain Disabled
            </Button>
            <br />
            <Button className='mini-btn' type='warn' size='mini' plain>
              Mini button
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
