const canvasRef = { current: undefined }
const movedXRef = { current: 0 }
const movedYRef = { current: 0 }
const centerXRef = { current: 0 }
const centerYRef = { current: 0 }
const internalRadiusRef = { current: 0 }
const contextRef = { current: undefined }

const title = 'JoyStick'
const internalFillColor = '#00AA00'
const internalLineWidth = 2
const internalStrokeColor = '#003300'
const externalLineWidth = 2
const externalStrokeColor = '#008000'
const autoReturnToCenter = true

const circumference = 2 * Math.PI

Page({
  data: {
    imageUrl: 'https://static-file-1259603563.file.myqcloud.com/image/admin_mgs_image_upload/20210302/896397f0-6ea0-41e0-89fe-94998d317bae.png',
    positionX: 0,
    positionY: 0,
    x: '',
    y: '',
    direction: ''
  },
  onClickOutside1Coverview(e) {
    console.log(`[CoverView] Outside 1 onClick`, e)
  },
  onClickCoverview1(e) {
    console.log(`[CoverView] 1 onClick`, e)
  },
  onClickCoverview2(e) {
    console.log(`[CoverView] 2 onClick`, e)
  },
  onClickCoverview4(e) {
    console.log(`[CoverView] 4 onClick`, e)
  },
  onClickCoverview5(e) {
    console.log(`[CoverView] 5 onClick`, e)
  },
  onClickCoverview3(e) {
    console.log(`[CoverView] 3 onClick`, e)
  },
  onCoverimageClick(e) {
    console.log(`[CoverImage] onClick`, e)
  },
  onCoverimageLoad(e) {
    console.log(`[CoverImage] onLoad`, e)
  },
  onCoverimageError(e) {
    console.log(`[CoverImage] onError`, e)
  },
  onTouchMove(e) {
    console.log('TouchMove', e);
  },
  ontouchend(e) {
    console.log('TouchEnd', e);
  },
  onLongTap(e) {
    console.log('LongTap', e)
  },
  onReady() {
    this.draw()
  },
  draw() {
    const query = bn.createSelectorQuery()

    query
      .select('.myCanvas')
      .fields({ node: true, size: true })
      .exec(res => {
        canvasRef.current = res[0].node
        const width = res[0].node.width
        const height = res[0].node.height
        canvasRef.current.id = title
        canvasRef.current.width = width
        canvasRef.current.height = height
        contextRef.current = canvasRef.current.getContext('2d')
        if (!contextRef.current) {
          throw new Error(`canvas.getContext('2d') fail`)
        }

        internalRadiusRef.current = (width - (width / 2 + 10)) / 2

        centerXRef.current = width / 2
        centerYRef.current = height / 2

        // Used to save current position of stick
        movedXRef.current = centerXRef.current
        movedYRef.current = centerYRef.current

        this.drawExternal()
        this.drawInternal()
      })
  },
  drawExternal() {
    const externalRadius = internalRadiusRef.current + 30
    const context = contextRef.current

    context.beginPath()
    context.arc(
      centerXRef.current,
      centerYRef.current,
      externalRadius,
      0,
      circumference,
      false
    )
    context.lineWidth = externalLineWidth
    context.strokeStyle = externalStrokeColor
    context.stroke()
  },
  drawInternal() {
    const internalRadius = internalRadiusRef.current
    const maxMoveStick = internalRadius + 5
    const context = contextRef.current
    const height = canvasRef.current.height
    const width = canvasRef.current.width

    context.beginPath()
    if (movedXRef.current < internalRadius) {
      movedXRef.current = maxMoveStick
    }
    if (movedXRef.current + internalRadius > width) {
      movedXRef.current = width - maxMoveStick
    }
    if (movedYRef.current < internalRadius) {
      movedYRef.current = maxMoveStick
    }
    if (movedYRef.current + internalRadius > height) {
      movedYRef.current = height - maxMoveStick
    }
    context.arc(
      movedXRef.current,
      movedYRef.current,
      internalRadius,
      0,
      circumference,
      false
    )
    // create radial gradient
    const gradient = context.createRadialGradient(
      centerXRef.current,
      centerYRef.current,
      5,
      centerXRef.current,
      centerYRef.current,
      200
    )
    // Light color
    gradient.addColorStop(0, internalFillColor)
    // Dark color
    gradient.addColorStop(1, internalStrokeColor)
    context.fillStyle = gradient
    context.fill()
    context.lineWidth = internalLineWidth
    context.strokeStyle = internalStrokeColor
    context.stroke()
  },
  updateState() {
    function getPosX() {
      return movedXRef.current
    }

    function getPosY() {
      return movedYRef.current
    }

    function getX() {
      const movedX = movedXRef.current
      const centerX = centerXRef.current
      const internalRadius = internalRadiusRef.current
      const maxMoveStick = internalRadius + 5
      return (100 * ((movedX - centerX) / maxMoveStick)).toFixed()
    }

    function getY() {
      const movedY = movedYRef.current
      const centerY = centerYRef.current
      const internalRadius = internalRadiusRef.current
      const maxMoveStick = internalRadius + 5
      return (100 * ((movedY - centerY) / maxMoveStick) * -1).toFixed()
    }

    function getDir() {
      let result = ''
      const movedX = movedXRef.current
      const centerX = centerXRef.current
      const movedY = movedYRef.current
      const centerY = centerYRef.current
      const horizontal = movedX - centerX
      const vertical = movedY - centerY
      const height = canvasRef.current.height
      const width = canvasRef.current.width
      const directionHorizontalLimitPos = width / 10
      const directionHorizontalLimitNeg = directionHorizontalLimitPos * -1
      const directionVerticalLimitPos = height / 10
      const directionVerticalLimitNeg = directionVerticalLimitPos * -1

      if (
        vertical >= directionVerticalLimitNeg &&
        vertical <= directionVerticalLimitPos
      ) {
        result = 'C'
      }
      if (vertical < directionVerticalLimitNeg) {
        result = 'N'
      }
      if (vertical > directionVerticalLimitPos) {
        result = 'S'
      }

      if (horizontal < directionHorizontalLimitNeg) {
        if (result === 'C') {
          result = 'W'
        } else {
          result += 'W'
        }
      }
      if (horizontal > directionHorizontalLimitPos) {
        if (result === 'C') {
          result = 'E'
        } else {
          result += 'E'
        }
      }

      return result
    }

    this.setData({
      positionX: getPosX(),
      positionY: getPosY(),
      x: getX(),
      y: getY(),
      direction: getDir()
    })
  },
  onTouchStart() {
    this.updateState()
  },
  onTouchEnd() {
    const context = contextRef.current
    const height = canvasRef.current.height
    const width = canvasRef.current.width
    const centerX = centerXRef.current
    const centerY = centerYRef.current

    // If required reset position store variable
    if (autoReturnToCenter) {
      movedXRef.current = centerX
      movedYRef.current = centerY
    }
    // Delete canvas
    context.clearRect(0, 0, width, height)
    // Redraw object
    this.drawExternal()
    this.drawInternal()
    this.updateState()
  },
  onTouchMove(event) {
    const context = contextRef.current
    const canvas = canvasRef.current
    const height = canvas.height
    const width = canvas.width

    // Prevent the browser from doing its default thing (scroll, zoom)
    // event.preventDefault()

    movedXRef.current = event.changedTouches[0].x
    movedYRef.current = event.changedTouches[0].y

    // Delete canvas
    context.clearRect(0, 0, width, height)
    // Redraw object
    this.drawExternal()
    this.drawInternal()
    this.updateState()
  }
})


