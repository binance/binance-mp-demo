import {
  View,
  Label,
  Checkbox,
  CheckboxGroup,
  BaseEventOrig
} from '@binance/mp-components'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './checkbox.scss'

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

  checkboxChange = (e: BaseEventOrig<{ value: string[] }>) => {
    console.log('change event fired，value:', e.detail.value)

    const items = this.state.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setState({
      items
    })
  }

  render() {
    const { items } = this.state
    return (
      <View className='container'>
        <Head title='checkbox'></Head>
        <View className='page-body'>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Default Style</View>
            <Label className='checkbox'>
              <Checkbox value='cb' checked></Checkbox>Checked
            </Label>
            <Label className='checkbox'>
              <Checkbox value='cb'></Checkbox>Unchecked
            </Label>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>Recommended style</View>
            <View className='bnui-cells bnui-cells_after-title'>
              <CheckboxGroup onChange={this.checkboxChange}>
                {items.map((item, index) => {
                  return (
                    <Label
                      className='bnui-cell bnui-check__label'
                      key={item.value}
                    >
                      <View className='bnui-cell__hd'>
                        <Checkbox
                          value={item.value}
                          checked={item.checked}
                        ></Checkbox>
                      </View>
                      <View className='bnui-cell__bd'>{item.name}</View>
                    </Label>
                  )
                })}
              </CheckboxGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
