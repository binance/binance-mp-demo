Page({
  data: {
  },
  startAnimation() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    currentPage.animate(
      '#container1',
      [
        { opacity: 1.0, rotate: 0, backgroundColor: '#FF0000' },
        { opacity: 0.5, rotate: 45, backgroundColor: '#00FF00', offset: 0.9 },
        { opacity: 0.0, rotate: 90, backgroundColor: '#FF0000' }
      ],
      5000,
      function () {
        currentPage.clearAnimation(
          '#container1',
          {
            rotate: true,
            opacity: true
          },
          () => {
            console.log(
              'The animation properties on #container have been cleared.'
            )
          }
        )
      }
    )
    currentPage.animate(
      '.block1',
      [
        { scale: [1, 1], rotate: 0, ease: 'ease-out' },
        { scale: [1.5, 1.5], rotate: 45, ease: 'ease-in', offset: 0.9 },
        { scale: [2, 2], rotate: 90 }
      ],
      5000,
      function () {
        currentPage.clearAnimation('.block1', function () {
          console.log('The animation properties on .block1 have been cleared.')
        })
      }
    )
  }
})
