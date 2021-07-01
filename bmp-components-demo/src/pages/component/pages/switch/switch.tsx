import React from 'react'
import { View, Switch, BaseEventOrig, Button } from '@binance/mp-components'
import { SwitchProps } from '@binance/mp-components/types/Switch'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './switch.scss'

class Page extends React.Component {
  state = {
    checked: false
  }
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
              <Switch
                checked
                onChange={this.switch1Change}
                onClick={e => console.log(`[Click] Switch`, e)}
              ></Switch>
              <Switch
                onChange={this.switch2Change}
                onClick={e => console.log(`[Click] Switch`, e)}
              ></Switch>
            </View>
            <View className='page-section-title'>disabled</View>
            <Switch value='cb' disabled checked></Switch>
            <Switch value='cb' disabled></Switch>
            <View className='page-section-title'>Controlled</View>
            <Switch
              value='cb'
              checked={this.state.checked}
              onClick={e => console.log(`[Click] Switch`, e)}
              onChange={e => this.setState({ checked: e.detail.value })}
            ></Switch>
            Checked
            <Button onClick={() => this.setState({ checked: true })}>
              Set checked
            </Button>
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
