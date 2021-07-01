import React from 'react'
import { View, Image } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './image.scss'
import localImage from '../../resources/pic/1.jpg'

function Page() {
  const imageUrl =
    'https://public.bnbstatic.com/static/images/common/ogImage.jpg'

  return (
    <View className='container'>
      <Head title='Image'></Head>
      <View className='page-body'>
        <View className='page-section page-section-gap'>
          <View className='page-section-title'>Local Image</View>
          <View className='page-section-ctn'>
            <Image
              id='image'
              className='image'
              src={localImage}
              onClick={e => console.log(`[Image] onClick`, e)}
            />
          </View>
        </View>
        <View className='page-section page-section-gap'>
          <View className='page-section-title'>Internet Image</View>
          <View className='page-section-ctn'>
            <Image className='image' src={imageUrl} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
