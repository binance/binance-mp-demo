const {
  queryCanvasAndRun,
  Triangle,
} = require('../utils/index')

Page({
  onLoad() {
    setTimeout(() => {
      queryCanvasAndRun('#canvas-1', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl)
        triangle.draw()
        gl.clearColor(255, 255, 255, 255)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.POINTS, 0, 3)
      })

      queryCanvasAndRun('#canvas-2', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl)
        triangle.draw()
        gl.clearColor(255, 255, 255, 255)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.LINE_STRIP, 0, 3)
      })

      queryCanvasAndRun('#canvas-3', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl)
        triangle.draw()
        gl.clearColor(255, 255, 255, 255)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.LINE_LOOP, 0, 3)
      })

      queryCanvasAndRun('#canvas-4', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl)
        triangle.draw()
        gl.clearColor(255, 255, 255, 255)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.LINES, 0, 3)
      })

      queryCanvasAndRun('#canvas-5', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl)
        triangle.draw()
        // canvas.toTempFilePath()
        console.log(canvas)
      })
    })
  },
})
