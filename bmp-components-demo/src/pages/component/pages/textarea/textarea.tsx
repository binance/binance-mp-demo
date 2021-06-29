import * as React from 'react'
import { View, Textarea, Button, Picker } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './textarea.scss'

const CONFIRM_TYPES = ['send', 'search', 'next', 'go', 'done', 'return']

function Page() {
  const [textareaValue, setTextareaValue] = React.useState('controlled')
  const [textareaValue2, setTextareaValue2] = React.useState('controlled')
  const [inputValue3, setInputValue3] = React.useState('')
  const [lineCount, setLineCount] = React.useState(0)
  const [inputValue4, setInputValue4] = React.useState('1234567890')
  const [inputValue5, setInputValue5] = React.useState(
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  )
  const [confirmType, setConfirmType] = React.useState(5)

  function onInput(e) {
    setTextareaValue(e.detail.value)
  }
  function onInputFilter(e) {
    if (e.detail.value.includes('a')) {
      return
    }
    setTextareaValue2(e.detail.value)
  }

  return (
    <View className='container'>
      <Head title='Textarea'></Head>
      <View className='page-body'>
        <View className='page-section'>
          <View className='bnui-cells__title'>
            autoFocus with selection(5,7)
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
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
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                value={inputValue4}
                cursor={6}
                onInput={e => setInputValue4(e.detail.value)}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>lineCount</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea onLineChange={e => setLineCount(e.detail.lineCount)} />
            </View>
          </View>
          <View>lineCount: {lineCount}</View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            autoHeight with padding, maxHeight, minHeight
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                autoHeight
                placeholder='autoHeight1'
                style={{ backgroundColor: 'var(--bnui-BG-1)' }}
                maxlength={-1}
              />
              <Textarea
                autoHeight
                placeholder='autoHeight2'
                style={{
                  height: 200, // autoHeight will ignore height style
                  padding: '8.5px 10px',
                  maxHeight: 150,
                  minHeight: 30,
                  backgroundColor: 'var(--bnui-BG-1)'
                }}
                maxlength={-1}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>autoHeight - with value</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                autoHeight
                placeholder='Please input'
                value={inputValue5}
                onInput={e => setInputValue5(e.detail.value)}
                maxlength={-1}
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>styling</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                className='textarea-bg'
                style={{
                  fontSize: 16,
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
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea placeholder='placeholder' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            placeholderStyle='color: red'
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                placeholder='placeholder'
                placeholderStyle='color: red;'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            placeholderClass='custom-placeholder'
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                placeholder={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                placeholderClass='custom-placeholder'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>maxlength = 10</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea maxlength={10} placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>maxlength = -1</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea maxlength={-1} placeholder='Please input' />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>disabled</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                disabled
                placeholder='Please input'
                style='cursor: not-allowed'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            Controlled textarea：{textareaValue}
            <Textarea value={textareaValue} />
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                value={textareaValue}
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
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                value={inputValue3}
                onInput={e => setInputValue3(e.detail.value)}
                placeholder='Please input'
              />
            </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>confirmType</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
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
            <View className='bnui-cell bnui-cell_textarea'>
              <Textarea
                confirmType={CONFIRM_TYPES[confirmType]}
                placeholder='apply confirmType'
              />
            </View>
          </View>
        </View>

        {/* <View className='page-section'>
          <View className='bnui-cells__title'>
            Controlled with empty string
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
            <View className='bnui-cell bnui-cell_textarea'>
            <Textarea className='bnui-input' value='' />
            </View>
          </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>Controlled with fixed value</View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_input'>
            <View className='bnui-cell bnui-cell_textarea'>
            <Textarea className='bnui-input' value='fixed value' />
            </View>
          </View>
          </View>
        </View>

        <View className='page-section'>
          <View className='bnui-cells__title'>
            Filter 'a'：{textareaValue2}
          </View>
          <View className='bnui-cells bnui-cells_after-title'>
            <View className='bnui-cell bnui-cell_textarea'>
            <View className='bnui-cell bnui-cell_textarea'>
            <Textarea
                  value={textareaValue2}
                onInput={onInputFilter}
              />
            </View>
          </View>
          </View>
        </View> */}
      </View>
    </View>
  )
}

export default withProviders(Page)
