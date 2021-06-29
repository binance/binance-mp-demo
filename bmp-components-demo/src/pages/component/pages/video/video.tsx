import * as React from 'react'
import { View, Video } from '@binance/mp-components'
import { createVideoContext, VideoContext } from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './video.scss'

const id = 'myVideo'

function Page() {
  const videoRef = React.useRef<VideoContext>()

  React.useEffect(() => {
    videoRef.current = createVideoContext(id)
    if (!videoRef.current) throw new Error('Missing VideoContext')
  }, [id])

  return (
    <View className='container'>
      <Head title='Video'></Head>

      <View className='page-section tc'>
        <Video
          id={id}
          src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
          onLoad={e => console.log('[Video] onLoad', e.detail)}
          onError={e => console.log('[Video] onError', e.detail)}
          controls
        />
      </View>
    </View>
  )
}

export default withProviders(Page)
