Page({
  data: {
    list: [
      {
        id: 'WebGL-API',
        name: 'webgl-api',
        open: false,
        pages: ['texImage2D', 'texSubImage2D', 'shader', 'clear', 'bufferData', 'drawArray', 'drawElements'],
      },
      {
        id: 'WebGL-Scene',
        name: 'webgl-scene',
        open: false,
        pages: ['glsl-model', '3d-rendering'],
      },
    ]
  },
  onShow() {
  },
  kindToggle(e) {
    const { id } = e.currentTarget.dataset
    const nextList = this.data.list.map(item => {
      if (item.id !== id) return item
      return { ...item, open: !item.open, name: item.name }
    })
    this.setData({
      list: nextList
    })
  },
})
