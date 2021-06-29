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
            <Button
              id='button-1234'
              type='primary'
              className='button'
              onClick={e => console.log(`[Click] button`, e)}
            >
              Primary Normal
            </Button>
            <Button type='primary' loading>
              Primary Loading
            </Button>
            <Button type='primary' disabled>
              Primary Disabled
            </Button>
            <Button type='default'>Default Normal</Button>
            <Button type='default' disabled>
              Default Disabled
            </Button>
            <Button type='warn'>Warn Normal</Button>
            <Button type='warn' disabled>
              Warn Disabled
            </Button>
            <View className='button-sp-area'>
              <Button type='primary' plain>
                Buton
              </Button>
              <Button type='primary' disabled plain>
                Disabled Buton
              </Button>
              <Button type='default' plain>
                Buton
              </Button>
              <Button type='default' disabled plain>
                Buton
              </Button>
              <Button className='mini-btn' type='primary' size='mini'>
                Buton
              </Button>
              <Button className='mini-btn' type='default' size='mini'>
                Buton
              </Button>
              <Button className='mini-btn' type='warn' size='mini'>
                Buton
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
