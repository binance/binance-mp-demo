Page({
  data: {
    isPolyfill: false,
    isExpected: false,
    orders: [],
    expectedOrders: [],
    code: `const arr = []
setTimeout(() => arr.push(6), 0)
arr.push(1)
const p = new Promise(resolve => {
  arr.push(2)
  resolve()
})
arr.push(3)
p.then(() => arr.push(5))
arr.push(4)
setTimeout(() => arr.push(7), 0)

this.setData({
  orders: arr
})`
  },
  onShow() {
    const isPolyfill = Promise && (Promise.___mp_polyfill || Promise.__mp_polyfill)
    const expectedOrders = isPolyfill ? [1,2,3,4,6,5,7] : [1,2,3,4,5,6,7]

    const arr = []
    setTimeout(() => arr.push(6), 0)
    arr.push(1)
    const p = new Promise(resolve => {
      arr.push(2)
      resolve()
    })
    arr.push(3)
    p.then(() => arr.push(5))
    arr.push(4)
    setTimeout(() => arr.push(7), 0)

    setTimeout(() => {
      this.setData({
        isPolyfill,
        isExpected: arr.length === expectedOrders.length && arr.every((v, i) => v === expectedOrders[i]),
        expectedOrders,
        orders: arr,
      })
    }, 100)
  }
})
