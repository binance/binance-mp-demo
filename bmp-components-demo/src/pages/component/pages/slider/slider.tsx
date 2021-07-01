import { View, Slider } from '@binance/mp-components'
import React from 'react'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './slider.scss'

class Page extends React.Component {
  sliderChange(e) {
    console.log('slider fire change event，value:', e.detail.value)
  }
  render() {
    return (
      <View className='container'>
        <Head title='slider'></Head>
        <View className='page-body'>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Set step</View>
            <View className='body-view'>
              <Slider
                value={60}
                onChange={this.sliderChange}
                step={5}
                onClick={e => console.log(`[Slider] onClick`, e)}
              ></Slider>
            </View>
          </View>

          <View className='page-section page-section-gap'>
            <View className='page-section-title'>disabled</View>
            <View className='body-view'>
              <Slider
                value={60}
                onChange={this.sliderChange}
                step={5}
                disabled
              ></Slider>
            </View>
          </View>

          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Display current value</View>
            <View className='body-view'>
              <Slider
                value={50}
                onChange={this.sliderChange}
                showValue
              ></Slider>
            </View>
          </View>
          <View className='page-section page-section-gap'>
            <View className='page-section-title'>Set min/max value</View>
            <View className='body-view'>
              <Slider
                value={100}
                onChange={this.sliderChange}
                min={50}
                max={200}
                showValue
              ></Slider>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withProviders(Page)
