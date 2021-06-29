import * as React from 'react'
import { View, ScrollView } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './scroll-view.scss'

function Page() {
  const [items, setItems] = React.useState(new Array(3).fill(1))
  const [scrollTop, setScrollTop] = React.useState(25)
  const [scrollIntoView, setScrollIntoView] = React.useState('demo3')

  function onScroll(e) {
    console.log('onScroll', e)
  }

  function onScrollToUpper(e) {
    console.log('onScrollToUpper', e)
  }

  function onScrollToLower(e) {
    console.log('onScrollToLower', e)
  }

  function loadMore() {
    setItems(items => [...items, ...new Array(3).fill(1)])
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScrollTop(50)
      setScrollIntoView('demo2')
    }, 3000)
  }, [])

  return (
    <View className='container'>
      <Head title='ScrollView'></Head>
      <View className='page-body'>
        <View className='page-section-title'>
          <text>scrollY Vertical Scroll</text>
        </View>
        <View className='page-section-spacing'>
          <ScrollView
            scrollY={true}
            style={{ height: 150 }}
            onScrollToUpper={onScrollToUpper}
            onScrollToLower={onScrollToLower}
            onScroll={onScroll}
            scrollTop={scrollTop}
          >
            <View id='demo1' className='scroll-view-item demo-text-1'></View>
            <View id='demo2' className='scroll-view-item demo-text-2'></View>
            <View id='demo3' className='scroll-view-item demo-text-3'></View>
          </ScrollView>
        </View>
      </View>
      <View className='page-section'>
        <View className='page-section-title'>
          <text>scrollX Horizontal Scroll</text>
        </View>
        <View className='page-section-spacing'>
          <ScrollView
            className='scroll-view_H'
            scrollX={true}
            style={{ width: '100%' }}
            onScrollToUpper={onScrollToUpper}
            onScrollToLower={onScrollToLower}
            onScroll={onScroll}
            scrollLeft={25}
          >
            <View id='demo1' className='scroll-view-item_H demo-text-1'></View>
            <View id='demo2' className='scroll-view-item_H demo-text-2'></View>
            <View id='demo3' className='scroll-view-item_H demo-text-3'></View>
          </ScrollView>
        </View>
      </View>

      <View className='page-body'>
        <View className='page-section-title'>
          <text>scrollY ScrollIntoView 2 item</text>
        </View>
        <View className='page-section-spacing'>
          <ScrollView
            scrollY={true}
            style={{ height: 150 }}
            onScrollToUpper={onScrollToUpper}
            onScrollToLower={onScrollToLower}
            onScroll={onScroll}
            scrollIntoView={scrollIntoView}
          >
            <View id='demo1' className='scroll-view-item demo-text-1'></View>
            <View id='demo2' className='scroll-view-item demo-text-2'></View>
            <View id='demo3' className='scroll-view-item demo-text-3'></View>
          </ScrollView>
        </View>
      </View>

      <View className='page-section'>
        <View className='page-section-title'>
          <text>scrollX ScrollIntoView 2 item</text>
        </View>
        <View className='page-section-spacing'>
          <ScrollView
            className='scroll-view_H'
            scrollX={true}
            style={{ width: '100%' }}
            onScrollToUpper={onScrollToUpper}
            onScrollToLower={onScrollToLower}
            onScroll={onScroll}
            scrollIntoView={scrollIntoView}
          >
            <View id='demo1' className='scroll-view-item_H demo-text-1'></View>
            <View id='demo2' className='scroll-view-item_H demo-text-2'></View>
            <View id='demo3' className='scroll-view-item_H demo-text-3'></View>
          </ScrollView>
        </View>
      </View>

      <View className='page-body'>
        <View className='page-section-title'>
          <text>Vertical Scroll with infinite scroll</text>
        </View>
        <View className='page-section-spacing'>
          <ScrollView
            scrollY={true}
            style={{ height: 150 }}
            onScrollToLower={loadMore}
          >
            {items.map((_e, index) => (
              <View
                key={index}
                id={`demo${index + 1}`}
                className={`scroll-view-item demo-text-${(index % 3) + 1}`}
              ></View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
