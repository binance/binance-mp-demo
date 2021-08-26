import * as React from 'react'
import mpService from '@binance/mp-service'
import { Icon, View } from '@binance/mp-components'
import './CustomNavigationBar.scss'

interface Props {
  loading: boolean
  show: boolean
  color: string
  background: string
  title: string
  back: boolean
  paddingTop: number
}

export default function CustomNavigationBar({
  loading,
  show,
  color,
  background,
  title,
  back,
  paddingTop
}: Props) {
  return show ? (
    <View className='cnb-placeholder' style={{}}>
      <View className='cnb-wrapper'>
        <View
          className='cnb-container'
          style={{ color, background, paddingTop }}
        >
          <View className='cnb-title-wrapper' style={{ paddingTop }}>
            <h3 className='cnb-title'>
              {loading && <View className='weui-loading cnb-loading' />}
              {title}
            </h3>
          </View>
          <View>
            {back && (
              <View className='cnb-icon-wrapper'>
                <Icon
                  type='back-arrow'
                  color={color}
                  onClick={() => {
                    mpService.navigateBack()
                  }}
                />
              </View>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </View>
  ) : null
}
