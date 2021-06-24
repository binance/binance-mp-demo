import React, { Component, useCallback, useState } from 'react'
import { View, Navigator, Image, Picker } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './image.scss'
import localImage from '../../resources/pic/1.jpg'

function Page() {
  const imageUrl =
    'https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20210302/896397f0-6ea0-41e0-89fe-94998d317bae.png'

  return (
    <View className='container'>
      <Head title='Image'></Head>
      <View className='page-body'>
        <View className='page-section page-section-gap'>
          <View className='page-section-title'>Local Image</View>
          <View className='page-section-ctn'>
            <Image className='image' src={localImage} />
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
