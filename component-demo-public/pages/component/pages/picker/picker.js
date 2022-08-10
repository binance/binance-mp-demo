function dateFormat(fmt, date) {
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(), // year
    'm+': (date.getMonth() + 1).toString(), // month
    'd+': date.getDate().toString(), // day
    'H+': date.getHours().toString(), // hour
    'M+': date.getMinutes().toString(), // min
    'S+': date.getSeconds().toString() // second
    // Other formatting characters can be added and must be converted into strings
  }
  for (let k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
      )
    }
  }
  return fmt
}
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      { id: 0, name: '中国' },
      { id: 1, name: '美国' },
      { id: 2, name: '巴西' },
      { id: 3, name: '日本' }
    ],
    index: 0,
    date: dateFormat('YYYY-mm-dd', new Date()),
    time: dateFormat('HH:MM', new Date()),
    multiArray:  [['无脊柱动物', '脊柱动物'],
    ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
    ['猪肉绦虫', '吸血虫']],
    multiArrayObject: [
      [
        { id: 0, name: '无脊柱动物' },
        { id: 1, name: '脊柱动物' }
      ],
      [
        { id: 0, name: '扁性动物' },
        { id: 1, name: '线形动物' },
        { id: 2, name: '环节动物' },
        { id: 3, name: '软体动物' },
        { id: 3, name: '节肢动物' }
      ],
      [
        { id: 0, name: '猪肉绦虫' },
        { id: 1, name: '吸血虫' }
      ]
    ],
    multiIndex: [0, 0, 0],
    multiObjectIndex: [0, 0, 0]
  },
  pickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  pickerCancel(e) {
    console.log(`[Picker] onCancel`, e)
  },
  pickerTap(e) {
    console.log(`[Picker] onPickerTap`, e)
  },
  pickerLongPress(e) {
    console.log(`[Picker] onLongPress`, e)
  },
  pickDate(e) {
    this.setData({
      date: e.detail.value
    })
  },
  pickTime(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onMultipickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  onMultiObjectpickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiObjectIndex: e.detail.value
    })
  },
  onMultiPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = { multiArray: [...multiArray], multiIndex: [...multiIndex] }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = [
              '扁性动物',
              '线形动物',
              '环节动物',
              '软体动物',
              '节肢动物'
            ]
            data.multiArray[2] = ['猪肉绦虫', '吸血虫']
            break
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物']
            data.multiArray[2] = ['鲫鱼', '带鱼']
            break
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0
        break
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫']
                break
              case 1:
                data.multiArray[2] = ['蛔虫']
                break
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥']
                break
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓']
                break
              case 4:
                data.multiArray[2] = [
                  '昆虫',
                  '甲壳动物',
                  '蛛形动物',
                  '多足动物'
                ]
                break
            }
            break
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼']
                break
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼']
                break
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎']
                break
            }
            break
        }
        data.multiIndex[2] = 0
        break
    }
    console.log(data)
    this.setData({
      multiArray: data.multiArray,
      multiIndex: data.multiIndex
    })
  },
  onMultiObjectPickerColumnChange(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = {
      multiArrayObject: [...multiArrayObject],
      multiObjectIndex: [...multiObjectIndex]
    }
    data.multiObjectIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiObjectIndex[0]) {
          case 0:
            data.multiArrayObject[1] = [
              { id: 0, name: '扁性动物' },
              { id: 1, name: '线形动物' },
              { id: 2, name: '环节动物' },
              { id: 3, name: '软体动物' },
              { id: 4, name: '节肢动物' }
            ]
            data.multiArrayObject[2] = [
              { id: 0, name: '猪肉绦虫' },
              { id: 1, name: '吸血虫' }
            ]
            break
          case 1:
            data.multiArrayObject[1] = [
              { id: 0, name: '鱼' },
              { id: 1, name: '两栖动物' },
              { id: 2, name: '爬行动物' }
            ]
            data.multiArrayObject[2] = [
              { id: 0, name: '鲫鱼' },
              { id: 1, name: '带鱼' }
            ]
            break
        }
        data.multiObjectIndex[1] = 0
        data.multiObjectIndex[2] = 0
        break
      case 1:
        switch (data.multiObjectIndex[0]) {
          case 0:
            switch (data.multiObjectIndex[1]) {
              case 0:
                data.multiArrayObject[2] = [
                  { id: 0, name: '猪肉绦虫' },
                  { id: 1, name: '吸血虫' }
                ]
                break
              case 1:
                data.multiArrayObject[2] = [{ id: 0, name: '蛔虫' }]
                break
              case 2:
                data.multiArrayObject[2] = [
                  { id: 0, name: '蚂蚁' },
                  { id: 1, name: '蚂蟥' }
                ]
                break
              case 3:
                data.multiArrayObject[2] = [
                  { id: 0, name: '河蚌' },
                  { id: 1, name: '蜗牛' },
                  { id: 2, name: '蛞蝓' }
                ]
                break
              case 4:
                data.multiArrayObject[2] = [
                  { id: 0, name: '昆虫' },
                  { id: 1, name: '甲壳动物' },
                  { id: 2, name: '蛛形动物' },
                  { id: 3, name: '多足动物' }
                ]
                break
            }
            break
          case 1:
            switch (data.multiObjectIndex[1]) {
              case 0:
                data.multiArrayObject[2] = [
                  { id: 0, name: '鲫鱼' },
                  { id: 1, name: '带鱼' }
                ]
                break
              case 1:
                data.multiArrayObject[2] = [
                  { id: 0, name: '青蛙' },
                  { id: 1, name: '娃娃鱼' }
                ]
                break
              case 2:
                data.multiArrayObject[2] = [
                  { id: 0, name: '蜥蜴' },
                  { id: 1, name: '龟' },
                  { id: 2, name: '壁虎' }
                ]
                break
            }
            break
        }
        data.multiObjectIndex[2] = 0
        break
    }
    console.log(data)
    this.setData({
      multiArrayObject: data.multiArrayObject,
      multiObjectIndex: data.multiObjectIndex
    })
  }
})
