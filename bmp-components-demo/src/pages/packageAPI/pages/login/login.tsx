import React, { useCallback, useState } from 'react'
import { View, Button, Text } from '@binance/mp-components'
import { login, getUserInfo as bnGetUserInfo } from '@binance/mp-service'
import withProviders from '../../../../common/withProviders'
import './login.scss'

function Page() {
  const [userInfo, setUserInfo] = useState<any>({})
  const [loginCode, setLoginCode] = useState('')
  const getUserInfo = useCallback(async () => {
    const result = await login({
      scope: 'user:email,user:address'
    })

    console.log(result)

    setLoginCode(result.code)

    console.log('start get userinfo')
    const resp = await bnGetUserInfo()
    console.log(resp)
    setUserInfo(resp)
  }, [setUserInfo])

  return (
    <View>
      <View
        style={{
          boxShadow: '0px 2px 4px rgb(0 0 0 / 8%), 0px 0px 2px rgb(0 0 0 / 8%)',
          padding: '24px 24px 32px'
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ flexShrink: 0, marginRight: '24px' }}>Nickname</Text>
            <Text
              style={{
                flexShrink: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {userInfo?.userInfo?.nickname || '--'}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ flexShrink: 0, marginRight: '24px' }}>
              Login Code
            </Text>
            <Text
              style={{
                flexShrink: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {loginCode || '--'}
            </Text>
          </View>

          {/* <Input placeholder='code' value={loginCode} onInput={(e) => setLoginCode(e.detail.value)}></Input> */}
          <Button onClick={getUserInfo}>Login with Binance</Button>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
