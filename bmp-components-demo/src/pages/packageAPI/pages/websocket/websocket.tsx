import * as React from 'react'
import { View, Button, Text, Input } from '@binance/mp-components'
import { connectSocket, SocketTask, showModal } from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './websocket.scss'

const URL = 'wss://echo.websocket.org'
const READY_STATE = {
  0: 'CONNECTING',
  1: 'OPEN',
  2: 'CLOSING',
  3: 'CLOSED'
}

function Page() {
  const [message, setMessage] = React.useState('Hi there')
  const [logs, setLogs] = React.useState('')
  const [socketTaskId, setSocketTaskId] = React.useState<number | undefined>()
  const [readyState, setReadyState] = React.useState<number | undefined>(0)
  const lastSocketTaskRef = React.useRef<SocketTask>()

  async function createSocket() {
    try {
      const socketTask = await connectSocket({
        url: URL,
        // protocols: [],
        // @ts-ignore
        headers: { test: 'a' },
        success: () => console.log('[connectSocket] success'),
        fail: ({ errMsg }) => console.log('[connectSocket] fail', errMsg),
        complete: () => console.log('[connectSocket] complete')
      })

      if (socketTask.errMsg) throw new Error(socketTask.errMsg)

      lastSocketTaskRef.current = socketTask

      setLogs('')
      setSocketTaskId(socketTask.socketTaskId)
      setReadyState(socketTask.readyState)

      socketTask.onOpen(() => {
        setReadyState(socketTask.readyState)
      })
      socketTask.onClose(() => {
        setReadyState(socketTask.readyState)
      })
      socketTask.onError(({ errMsg }) => {
        console.log('onError', errMsg)
        setReadyState(socketTask.readyState)
      })
      socketTask.onMessage(options => {
        const data =
          options.data instanceof ArrayBuffer
            ? decodeString(options.data)
            : options.data

        setLogs(logs => `${logs}${data}\n`)
      })
    } catch (error) {
      showModal({
        title: `[WebSocket] Error`,
        content: error.message,
        showCancel: false
      })
    }
  }

  function send() {
    if (!lastSocketTaskRef.current) return
    lastSocketTaskRef.current.send({ data: message })
  }

  function sendArrayBuffer() {
    if (!lastSocketTaskRef.current) return
    lastSocketTaskRef.current.send({ data: encodeString(message) })
  }

  function close() {
    if (!lastSocketTaskRef.current) return
    lastSocketTaskRef.current.close({})
    setReadyState(lastSocketTaskRef.current.readyState)
  }

  return (
    <View className='container'>
      <Head title='WebSocket'></Head>
      <View className='page-body'>
        <Text className='ws-center'>
          <View className='page-section'>
            <Button
              onClick={createSocket}
              disabled={
                Boolean(lastSocketTaskRef.current) &&
                (readyState === 0 || readyState === 2)
              }
            >
              Connect to {URL}
            </Button>
          </View>
        </Text>

        {Boolean(lastSocketTaskRef.current) && (
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 18 }}>Last WebSocket connection:</Text>
            <Text>socketTaskId: {socketTaskId}</Text>
            <Text>
              readyState:{' '}
              {typeof readyState !== 'undefined' && READY_STATE[readyState]}
            </Text>

            <View className='page-section'>
              Input message:
              <Input
                value={message}
                onInput={e => setMessage(e.detail.value)}
                disabled={readyState !== 1}
              />
              <Button onClick={send} disabled={readyState !== 1}>
                Send
              </Button>
              <Button
                onClick={sendArrayBuffer}
                disabled={readyState !== 1}
                style={{ marginLeft: 12 }}
              >
                SendArrayBuffer
              </Button>
              <Button
                style={{ marginLeft: 16 }}
                onClick={close}
                disabled={readyState !== 1}
              >
                Close
              </Button>
              <View>
                Received echo messages:
                <View className='ws-logs'>{logs}</View>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}

export default withProviders(Page)

/**
 * ref: https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
 */
function ab2str(buf: ArrayBuffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}
function str2ab(str: string) {
  var buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
  var bufView = new Uint16Array(buf)
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

function encodeString(string: string): ArrayBuffer {
  return str2ab(string)
}

function decodeString(buffer: ArrayBuffer): string {
  return ab2str(buffer)
}
