import {
  View,
  Label,
  Radio,
  RadioGroup,
  BaseEventOrig,
  Button
} from '@binance/mp-components'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './radio.scss'

class Page extends React.Component {
  state = {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国', checked: true },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'FRA', name: '法国' }
    ],
    checked: false
  }

  radioChange = (e: BaseEventOrig<any>) => {
    console.log('[RadioGroup] radio fires change event，value:', e.detail.value)
    const items = this.state.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setState({
      items
    })
  }

  render() {
    const { items } = this.state
    return (
      <View className='container'>
        <Head title='radio'></Head>
        <View className='page-body'>
          <View className='page-section page-section-gap'>
            <View className='page-section page-section-gap'>
              <View className='page-section-title'>Default Style</View>
              <Radio
                value='cb'
                checked
                onClick={e => console.log('[Click] Radio', e)}
              ></Radio>
              <Radio
                value='cb'
                onClick={e => console.log('[Click] Radio', e)}
              ></Radio>

              <View className='page-section-title'>With Label</View>
              <Label
                className='radio'
                onClick={e => console.log('[Click] Label', e)}
              >
                <Radio
                  value='cb'
                  checked
                  onClick={e => console.log('[Click] Radio', e)}
                ></Radio>
                Checked
              </Label>
              <Label className='radio'>
                <Radio value='cb'></Radio>Unchecked
              </Label>
              <View className='page-section-title'>disabled</View>
              <Label className='radio'>
                <Radio value='cb' disabled checked></Radio>Checked
              </Label>
              <Label className='radio'>
                <Radio value='cb' disabled></Radio>Unchecked
              </Label>

              <View className='page-section-title'>Controlled</View>
              <Label
                className='radio'
                onClick={() => this.setState({ checked: !this.state.checked })}
              >
                <Radio value='cb' checked={this.state.checked}></Radio>
                Checked
              </Label>
              <Button
                onClick={() => this.setState({ checked: !this.state.checked })}
              >
                Toggle checked
              </Button>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>Recommended Styl</View>
            <View className='bnui-cells bnui-cells_after-title'>
              <RadioGroup
                onChange={this.radioChange}
                onClick={e => console.log('[Click] RadioGroup', e)}
              >
                {items.map(item => {
                  return (
                    <Label
                      className='bnui-cell bnui-check__label'
                      key={item.value}
                      onClick={e => console.log('[Click] Label', e)}
                    >
                      <View className='bnui-cell__hd'>
                        <Radio
                          value={item.value}
                          checked={item.checked}
                          onClick={e => console.log('[Click] Radio', e)}
                        ></Radio>
                      </View>
                      <View className='bnui-cell__bd'>{item.name}</View>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
