import {
  Block,
  View,
  Form,
  Switch,
  RadioGroup,
  Label,
  Radio,
  CheckboxGroup,
  Checkbox,
  Slider,
  Input,
  Button
} from '@binance/mp-components'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './form.scss'

class Page extends React.Component {
  formSubmit = e => {
    console.log('form fires submit event，data:', e.detail.value)
  }

  formReset = e => {
    console.log('form fires reset event，data:', e.detail.value)
  }
  render() {
    return (
      <View className='container'>
        <Head title='form'></Head>
        <View className='page-body'>
          <Form onSubmit={this.formSubmit} onReset={this.formReset}>
            <View className='page-section page-section-gap'>
              <View className='page-section-title'>switch</View>
              <Switch name='switch'></Switch>
            </View>
            <View className='page-section page-section-gap'>
              <View className='page-section-title'>radio</View>
              <RadioGroup name='radio'>
                <Label>
                  <Radio value='radio1'></Radio>Item 1
                </Label>
                <Label>
                  <Radio value='radio2'></Radio>Item 2
                </Label>
              </RadioGroup>
            </View>
            <View className='page-section page-section-gap'>
              <View className='page-section-title'>checkbox</View>
              <CheckboxGroup name='checkbox'>
                <Label>
                  <Checkbox value='checkbox1'></Checkbox>Item 1
                </Label>
                <Label>
                  <Checkbox value='checkbox2'></Checkbox>Item 2
                </Label>
              </CheckboxGroup>
            </View>
            <View className='page-section page-section-gap'>
              <View className='page-section-title'>slider</View>
              <Slider value={50} name='slider' showValue></Slider>
            </View>
            <View className='page-section'>
              <View className='page-section-title'>input</View>
              <View className='bnui-cells bnui-cells_after-title'>
                <View className='bnui-cell bnui-cell_input'>
                  <View className='bnui-cell__bd'>
                    <Input
                      className='bnui-input'
                      name='input'
                      placeholder='This is a input box'
                    ></Input>
                  </View>
                </View>
              </View>
            </View>
            <View className='btn-area'>
              <Button type='primary' formType='submit'>
                Submit
              </Button>
              <Button formType='reset'>Reset</Button>
            </View>
          </Form>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
