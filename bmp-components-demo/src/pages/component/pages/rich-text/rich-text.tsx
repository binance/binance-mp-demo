import * as React from 'react'
import { View, Textarea, RichText, Picker } from '@binance/mp-components'
import { Head } from '../../../../common/head'
import withProviders from '../../../../common/withProviders'
import './rich-text.scss'

type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps
type Nodes = ExtractProps<typeof RichText>['nodes']

const SPACE_RANGE = ['', 'nbsp', 'ensp', 'emsp']

function Page() {
  const [space, setSpace] = React.useState(0)
  const [html, setHtml] = React.useState(
    `<span>
  <div 
    class="div_class"
    style="line-height: 16px; color: red;"
    id="div"
  >
    Hello&nbsp;World!1&emsp;2&ensp;3
  </div>
  <ol start="10">
    <li>ol with 'start=10'</li>
  </ol>
  <tr colspan="1" rowSpan="2">case-insensitive</tr>
  <img src="https://github.githubassets.com/images/icons/emoji/tada.png" style="width: 20px">
</span>`
  )
  const [nodes, setNodes] = React.useState<Nodes>([
    {
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 16px; color: red;',
        id: 'div'
      },
      children: [
        {
          type: 'text',
          text: 'Hello&nbsp;World!1&emsp;2&ensp;3'
        }
      ]
    }
  ])

  function onNodesChange(e) {
    try {
      const content = JSON.parse(e.detail.value)
      setNodes(content)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className='container'>
      <Head title='RichText'></Head>

      <View className='page-section tc'>
        <View className='page-body'>
          <View className='rich-text-picker'>
            <Picker
              mode='selector'
              range={SPACE_RANGE}
              value={space}
              onChange={e => setSpace(e.detail.value)}
            >
              <View className='bnui-input'>
                Select a space:&nbsp;
                {SPACE_RANGE[space] ? SPACE_RANGE[space] : 'default'}
              </View>
            </Picker>
          </View>

          <View className='page-section'>
            <View className='page-section-title'>HTML string</View>
            <View className='rich-text-textarea-wrapper'>
              <Textarea
                value={html}
                onInput={e => setHtml(e.detail.value)}
                maxlength={3000}
              />
            </View>
            <View className='rich-text-wrp'>
              <RichText
                nodes={html}
                space={SPACE_RANGE[space] ? SPACE_RANGE[space] : undefined}
              ></RichText>
            </View>
          </View>

          <View className='page-section'>
            <View className='page-section-title'>Nodes</View>
            <View className='rich-text-textarea-wrapper'>
              <Textarea
                value={JSON.stringify(nodes, null, 2)}
                onInput={onNodesChange}
                maxlength={3000}
              />
            </View>
            <View className='rich-text-wrp'>
              <RichText
                nodes={nodes}
                space={SPACE_RANGE[space] ? SPACE_RANGE[space] : undefined}
              ></RichText>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default withProviders(Page)
