import * as React from 'react'
import { View, Input, Button, Picker } from '@binance/mp-components'
import {
  onKeyboardHeightChange,
  offKeyboardHeightChange,
  hideKeyboard
} from '@binance/mp-service'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './input.scss'

const CONFIRM_TYPES = ['send', 'search', 'next', 'go', 'done']

function Page() {
  const [inputValue, setInputValue] = React.useState('controlled')
  const [inputValue2, setInputValue2] = React.useState('controlled')
  const [inputValue3, setInputValue3] = React.useState('')
  const [inputValue4, setInputValue4] = React.useState('1234567890')
  const [inputValue5, setInputValue5] = React.useState('')
  const [confirmType, setConfirmType] = React.useState(4)
  const [placeholderColor, setPlaceholderColor] = React.useState('red')
  const [showInput, setShowInput] = React.useState(false)

  function onInput(e) {
    setInputValue(e.detail.value)
  }
  function onInputFilter(e) {
    if (e.detail.value.includes('a')) {
      return
    }
    setInputValue2(e.detail.value)
  }

  React.useEffect(() => {
    function keyboardHeightChange(res) {
      console.log(`[onKeyboardHeightChange] res`, res)
    }
    onKeyboardHeightChange(keyboardHeightChange)

    return () => {
      offKeyboardHeightChange(keyboardHeightChange)
    }
  }, [])

  return (
    <View className='container'>
      <Head title='Input'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <View className='bnui-cells__title'>
            autoFocus with selection(5,7)
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                autoFocus
                value={inputValue4}
                selectionStart={5}
                selectionEnd={7}
                onInput={e => setInputValue4(e.detail.value)}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>cursor=6 when focus</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                value={inputValue4}
                cursor={6}
                onInput={e => setInputValue4(e.detail.value)}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            Show / Hide{' '}
            <Button
              onClick={() => setShowInput(!showInput)}
              style={{ width: 100 }}
            >
              Toggle
            </Button>
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              {showInput && <Input />}
            </View>
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              {!showInput && <Input />}
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>styling</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                className='input-bg'
                style={{
                  height: 70,
                  backgroundColor: 'var(--bnui-BG-1)',
                  color: 'var(--bnui-FG-1)',
                  padding: 13
                }}
                placeholder='Please input'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>placeholder</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input placeholder='placeholder' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            placeholderStyle='color: red'
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                placeholder='placeholder'
                placeholderStyle={`color: ${placeholderColor}`}
              />
              <Button
                onClick={() => {
                  setPlaceholderColor('blue')
                }}
                style={{ width: 150 }}
              >
                Set Blue
              </Button>
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            placeholderClass='custom-placeholder'
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                placeholder='placeholder'
                placeholderClass='custom-placeholder'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>maxlength = 10</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input maxlength={10} placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>maxlength = -1</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input maxlength={-1} placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>disabled</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                disabled
                placeholder='Please input'
                style='cursor: not-allowed'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            Controlled input：{inputValue}
            <Input value={inputValue} />
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                value={inputValue}
                onInput={onInput}
                placeholder='Please input'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            Controlled input：
            <Button
              onClick={() => {
                setInputValue3('foobar')
              }}
            >
              Set to foobar
            </Button>
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                value={inputValue3}
                onInput={e => setInputValue3(e.detail.value)}
                placeholder='Please input'
              />
            </View>
          </View>
        </View>
        {/* 
        <View className='page-section'>
          <View className='bnui-cells__title'>Controlled with fixed value</View>
          <View className='bnui-cells bnui-cells_after-title'>
            
                      <View className='bnui-cell bnui-cell_input'>
    
          <Input  value='fixed value' />
            </View>
              </View>
          </View>
        </View> */}

        {/* <View className='page-section'>
          <View className='bnui-cells__title'>Filter 'a'：{inputValue2}</View>
          <View className='bnui-cells bnui-cells_after-title'>
            
                      <View className='bnui-cell bnui-cell_input'>
    
          <Input
                
                value={inputValue2}
                onInput={onInputFilter}
              />
            </View>
              </View>
          </View>
        </View> */}

        <View className='page-section'>
          <View className='bnui-cells__title'>type = number</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input type='number' placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>password input</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input password type='text' placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>hideKeyboard when input 123</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                type='text'
                value={inputValue5}
                onInput={e => {
                  if (e.detail.value === '123') {
                    hideKeyboard({
                      complete(res) {
                        console.log(`hideKeyboard complete`, res)
                      },
                      fail(res) {
                        console.log(`hideKeyboard fail`, res)
                      },
                      success(res) {
                        console.log(`hideKeyboard success`, res)
                      }
                    })
                  }
                  setInputValue5(e.detail.value)
                }}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>confirmType</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Picker
                mode='selector'
                range={CONFIRM_TYPES}
                value={confirmType}
                onChange={e => setConfirmType(e.detail.value)}
              >
                <View className='bnui-input'>
                  Select a confirmType:&nbsp;
                  {CONFIRM_TYPES[confirmType] ? CONFIRM_TYPES[confirmType] : ''}
                </View>
              </Picker>
            </View>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                confirmType={CONFIRM_TYPES[confirmType]}
                placeholder='apply confirmType'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>holdKeyboard</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input type='text' placeholder='Please input' holdKeyboard />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>confirmHold</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input type='text' placeholder='Please input' confirmHold />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>onConfirm</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
              <Input
                type='text'
                placeholder='Please input'
                onConfirm={e => console.log(`onConfirm e`, e.detail.value)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
