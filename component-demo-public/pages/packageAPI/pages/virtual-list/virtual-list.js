const totalList = new Array(2000).fill(1).map((_, index) => index + 1)
const list = totalList.slice(10, 20)
const startList = totalList.slice(0, 10)
const endList = totalList.slice(20, 30)
/***
 * ------📁startList backup
 * 
 * 400
 * 
 * ------📁 list content
 * x
 * ========📱 -> scrollTop = 400 + y      x + y = y + z = 400
 * y
 * ------📁 endList backup
 * z   viewport
 * ========📱
 * 
 * -------
 */
Page({
  data: {
    list,
    startList,
    endList,
    end: 30,
    top: 0,
    height: 0,
    style: `height: 0px`,
    previous: undefined
  },
  onLoad() {
    this._observer = bn.createIntersectionObserver(this, {
      thresholds: new Array(10).fill(0.1).map((item, index) => index * item)
    })
    this._observer.relativeTo('.container').observe('.start', res => {
        console.log('createIntersectionObserver start: ', res,  this.data.end)
    
      if (this.data.end <= 30) {
        this.setData({
            previous: undefined
        })
        return
      }
      if (res.intersectionRatio >= 0.6 && this.data.previous) {
        
        const  end = this.data.end - 10,
          height = this.data.height 
        this.setData({
          height: height - 400,
          style: `height: ${height - 400}px`,
          end,
          startList: totalList.slice( end-30, end - 20),
          list: totalList.slice(end - 20, end - 10),
          endList: totalList.slice(end - 10, end),
          
        })
        this.setData({
            top: height - res.boundingClientRect.top,
        })
      
       
      }
    })
    this._observer_end = bn.createIntersectionObserver(this, {
      thresholds: new Array(10).fill(0.1).map((item, index) => index * item)
    })
    this._observer_end.relativeTo('.container').observe('.end', res => {
     
      if (this.data.end >= 2000) {
        bn.toast({
          title: 'no more data ~'
        })
        return
      }
      if (res.intersectionRatio >= 0.6  && res.boundingClientRect.top > 0) {
        
        const  end = this.data.end + 10,
          height = this.data.height + 400
     
        this.setData({
          previous: 'end',
          top: height + res.intersectionRect.y,
          height,
          style: `height: ${height}px`,
          end,
          startList: totalList.slice(end-30, end-20),
          list: totalList.slice(end- 20, end - 10),
          endList: totalList.slice(end - 10, end)
        })
       
      }
    })
  }
})
