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
    setTimeout(() => {
      videoRef.current = createVideoContext(id)
      if (!videoRef.current) throw new Error('Missing VideoContext')
      videoRef.current.play()
    }, 500)
  }, [id])

  return (
    <View className='container'>
      <Head title='Video'></Head>

      <View className='page-section tc'>
        <Video
          id={id}
          src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
          onPlay={e => console.log('[Video] onPlay', e)}
          onPause={e => console.log('[Video] onPause', e)}
          onEnded={e => console.log('[Video] onEnded', e)}
          onTimeUpdate={e => console.log('[Video] onTimeUpdate', e)}
          onFullscreenChange={e => console.log('[Video] onFullscreenChange', e)}
          onLoad={e => console.log('[Video] onLoad', e)}
          onError={e => console.log('[Video] onError', e)}
          controls
        />
      </View>
    </View>
  )
}

export default withProviders(Page)
