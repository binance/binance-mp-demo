import {
  Block,
  View,
  Label,
  Radio,
  RadioGroup,
  BaseEventOrig
} from '@binance/mp-components'
import { RadioGroupProps } from '@binance/mp-components/types/RadioGroup'
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
    ]
  }

  radioChange = (e: BaseEventOrig<any>) => {
    console.log('radio fires change event，value:', e.detail.value)
    console.log(this)
    const items = this.state.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    console.log(items)
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
            <View className='page-section-title'>Default Style</View>
            <Label className='radio'>
              <Radio value='r1' checked></Radio>Selected
            </Label>
            <Label className='radio'>
              <Radio value='r2'></Radio>Unselected
            </Label>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>Recommended Styl</View>
            <View className='bnui-cells bnui-cells_after-title'>
              <RadioGroup onChange={this.radioChange}>
                {items.map((item, index) => {
                  return (
                    <Label
                      className='bnui-cell bnui-check__label'
                      key={item.value}
                    >
                      <View className='bnui-cell__hd'>
                        <Radio
                          value={item.value}
                          checked={item.checked}
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
