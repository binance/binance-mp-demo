Page({
  onLoad() {
      const query = bn.createSelectorQuery()
      query
        .select(`.canvas`)
        .fields({ node: true, size: true })
        .exec(res => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          ctx.font = 'bold 48px serif'
          ctx.strokeText('Hello world', 50, 100)
        })
  }
})
