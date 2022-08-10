Page({
  data: {
    SPACE_RANGE: ['', 'nbsp', 'ensp', 'emsp'],
    rangeIndex: 1,
    space: 'nbsp',
    html: `<span>
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
    </span>`,
    nodes: [
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
    ],
    nodesStr: JSON.stringify([
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
    ], null, 2)
  },
  onPickChange(e) {
    console.log('[rich-text] onPickChange', e);
    const space = this.data.SPACE_RANGE[e.detail.value]
    this.setData({
      space,
      rangeIndex: e.detail.value
    })
  },
  onTextareaInput(e) {
    this.setData({
      html: e.detail.value
    })
  },
  onRichTextTap(){
    console.log(`[rich-text] bindtap`, e)
  },
  onRichTextLongPress(){
    console.log(`[rich-text] onLongPress`, e)
  },
  onNodesChange(e) {
    try {
      const nodes = JSON.parse(e.detail.value)
      console.log('[rich-text] onNodesChange', nodes);
      this.setData({
        nodes,
        nodesStr: e.detail.value
      })
    } catch (error) {
      console.log(error)
    }
  }
})
