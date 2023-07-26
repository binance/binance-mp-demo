Page({
  data: {
    imageUrl: 'https://public.bnbstatic.com/static/images/common/ogImage.jpg',
    lazyImageUrl: 'https://public.bnbstatic.com/static/images/common/ogImage.jpg',
    localImage: 'pages/tabbar/component/resources/pic/1.jpg',
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'widthFix',
      text: 'widthFix：缩放模式，宽度不变，高度自动变化，保持原图宽高比不变'
    }, {
      mode: 'heightFix',
      text: 'heightFix：缩放模式，高度不变，宽度自动变化，保持原图宽高比不变'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
  },
  onClick(e) {
    console.log(`[Image] onClick`, e)
  },
  onLongPress(e) {
    console.log(`[Image] onLongPress`, e)
  },
  onLoad(e) {
    console.log(`[Image] onLoad`, e)
  },
  onError(e) {
    console.log(`[Image] onError`, e)
  },
})
