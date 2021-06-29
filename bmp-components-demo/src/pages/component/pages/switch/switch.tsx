import React from 'react'
import { View, Switch, BaseEventOrig } from '@binance/mp-components'
import { SwitchProps } from '@binance/mp-components/types/Switch'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './switch.scss'

class Page extends React.Component {
  switch1Change(e: BaseEventOrig<SwitchProps.onChangeEventDetail>) {
    console.log('switch1 fire change event, value:', e.detail.value)
  }

  switch2Change(e: BaseEventOrig<SwitchProps.onChangeEventDetail>) {
    console.log('switch2 fire change event, value:', e.detail.value)
  }
  render() {
    return (
      <View className='container'>
        <Head title='switch'></Head>
        <View className='page-body'>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Default Style</View>
            <View className='body-view'>
              <Switch checked onChange={this.switch1Change}></Switch>
              <Switch onChange={this.switch2Change}></Switch>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>Recommended Style</View>
            <View className='bnui-cells bnui-cells_after-title'>
              <View className='bnui-cell bnui-cell_switch'>
                <View className='bnui-cell__bd'>Opening</View>
                <View className='bnui-cell__ft'>
                  <Switch checked></Switch>
                </View>
              </View>
              <View className='bnui-cell bnui-cell_switch'>
                <View className='bnui-cell__bd'>Closed</View>
                <View className='bnui-cell__ft'>
                  <Switch></Switch>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
