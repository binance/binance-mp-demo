Page({
  data: {
    message: '',
    value: '',
    years: ['2022', '2023'],
    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    day: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
  },
  pickerChange(e) {
    console.log(e)
    this.setData({
      value: this.data.years[e.detail.value[0]] + '-'
          + this.data.month[e.detail.value[1]] + '-'
          + this.data.day[e.detail.value[2]]
    })
  },
  pickerStart() {
    console.log('picker start')
    this.setData({
      message: 'picker start'
    })
  },
  pickerEnd() {
    console.log('picker end')
    this.setData({
      message: 'picker end'
    })
  },
})
