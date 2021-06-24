import {
  View,
  CheckboxGroup,
  Label,
  Checkbox,
  Text,
  RadioGroup,
  Radio,
  BaseEventOrig
} from '@binance/mp-components'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './label.scss'

class Page extends React.Component {
  state = {
    checkboxItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: true }
    ],
    radioItems: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: true }
    ]
  }

  checkboxChange = (
    e: BaseEventOrig<{
      value: string[]
    }>
  ) => {
    const checked = e.detail.value
    const state = { ...this.state }
    state.checkboxItems = state.checkboxItems.map(item => {
      if (checked.indexOf(item.name) !== -1) {
        return {
          ...item,
          checked: true
        }
      } else {
        return {
          ...item,
          checked: false
        }
      }
    })
    this.setState(state)
  }

  radioChange = (
    e: BaseEventOrig<{
      value: string[]
    }>
  ) => {
    const checked = e.detail.value
    const state = { ...this.state }
    state.radioItems = state.radioItems.map(item => {
      if (checked.indexOf(item.name) !== -1) {
        return {
          ...item,
          checked: true
        }
      } else {
        return {
          ...item,
          checked: false
        }
      }
    })

    this.setState(state)
  }

  tapEvent() {
    console.log('Button Clicked')
  }

  render() {
    const { checkboxItems, radioItems } = this.state
    return (
      <View className='container'>
        <Head title='label'></Head>
        <View className='page-body'>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Form component in label</View>
            <CheckboxGroup className='group' onChange={this.checkboxChange}>
              {checkboxItems.map((item, index) => {
                return (
                  <View className='label-1' key={index}>
                    <Label>
                      <Checkbox
                        value={item.name}
                        checked={item.checked}
                      ></Checkbox>
                      <Text className='label-1-text'>{item.value}</Text>
                    </Label>
                  </View>
                )
              })}
            </CheckboxGroup>
          </View>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>
              Label marks form component by &quot;for&quot;
            </View>
            <RadioGroup className='group' onChange={this.radioChange}>
              {radioItems.map((item, index) => {
                return (
                  <View className='label-2' key={index}>
                    <Radio
                      id={item.name}
                      value={item.name}
                      checked={item.checked}
                    ></Radio>
                    <Label className='label-2-text' for={item.name}>
                      <Text>{item.name}</Text>
                    </Label>
                  </View>
                )
              })}
            </RadioGroup>
          </View>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>
              Select first form component when there are mutiple form components
              in label.
            </View>
            <Label className='label-3'>
              <Checkbox className='checkbox-3' value='item1'>
                Option 1
              </Checkbox>
              <Checkbox className='checkbox-3' value='item2'>
                Option 2
              </Checkbox>
              <View className='label-3-text'>
                When click the text, it will select first checkbox by default
              </View>
            </Label>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
