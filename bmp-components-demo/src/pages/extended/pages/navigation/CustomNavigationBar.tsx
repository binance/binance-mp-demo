import * as React from 'react'
import { navigateBack } from '@binance/mp-service'
import './CustomNavigationBar.scss'

interface Props {
  loading: boolean
  show: boolean
  color: string
  background: string
  title: string
  back: boolean
}

export default function CustomNavigationBar({
  loading,
  show,
  color,
  background,
  title,
  back
}: Props) {
  return show ? (
    <div className='cnb-placeholder'>
      <div className='cnb-wrapper'>
        <div className='cnb-container' style={{ color, background }}>
          <div className='cnb-title-wrapper'>
            <h3 className='cnb-title'>
              {loading && <div className='bnui-loading cnb-loading' />}
              {title}
            </h3>
          </div>
          <div>
            {back && (
              <div
                className='cnb-icon-wrapper'
                style={{ color }}
                onClick={() => {
                  navigateBack()
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={12}
                  height={24}
                  viewBox='0 0 12 24'
                >
                  <path
                    fill='currentColor'
                    fillOpacity={0.9}
                    fillRule='evenodd'
                    d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 010-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z'
                  />
                </svg>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  ) : null
}
