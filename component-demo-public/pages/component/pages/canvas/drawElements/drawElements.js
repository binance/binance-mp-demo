const {
  queryCanvasAndRun,
  Triangle,
  initShaderProgram,
} = require('../utils/index')

const vs = `
attribute vec3 a_position;
void main() {
  gl_Position = vec4(a_position, 1.0);
}
`

const fs = `
void main(void) {
  gl_FragColor = vec4(1.0, 0, 0, 1.0);
}
`
function drawElement(gl) {
    const program = initShaderProgram(gl, vs, fs)
    const vPos = gl.getAttribLocation(program, 'a_position')
    // const texCord = gl.getAttribLocation(program, 'aTextureCord')
    // const sampler = gl.getUniformLocation(program, 'uSampler')

    const vertex = [
      0.5, 0.5, 0.0,   // 右上角
      0.5, -0.5, 0.0,  // 右下角
      -0.5, -0.5, 0.0, // 左下角
      -0.5, 0.5, 0.0   // 左上角
    ]

    const indices = [
      0, 1, 3, // 第一个三角形
      1, 2, 3  // 第二个三角形
    ]

    const posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)

    const ebo = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.vertexAttribPointer(vPos, 3, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vPos)
    // gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
    // gl.vertexAttribPointer(texCord, 2, gl.FLOAT, false, 0, 0)
    // gl.enableVertexAttribArray(texCord)
    
    gl.useProgram(program)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo)

}

Page({
  onLoad() {
    setTimeout(() => {
      queryCanvasAndRun('#canvas-1', (canvas) => {
        const gl = canvas.getContext('webgl')
        drawElement(gl)
        gl.drawElements(gl.POINTS, 6, gl.UNSIGNED_SHORT, 0)
      })

      queryCanvasAndRun('#canvas-2', (canvas) => {
        const gl = canvas.getContext('webgl')
        drawElement(gl)
        gl.drawElements(gl.LINE_STRIP, 6, gl.UNSIGNED_SHORT, 0)
      })

      queryCanvasAndRun('#canvas-3', (canvas) => {
        const gl = canvas.getContext('webgl')
        drawElement(gl)
        gl.drawElements(gl.LINE_LOOP, 6, gl.UNSIGNED_SHORT, 0)
      })

      queryCanvasAndRun('#canvas-4', (canvas) => {
        const gl = canvas.getContext('webgl')
        drawElement(gl)
        gl.drawElements(gl.LINES, 6, gl.UNSIGNED_SHORT, 0)
      })

      queryCanvasAndRun('#canvas-5', (canvas) => {
        const gl = canvas.getContext('webgl')
        drawElement(gl)
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
      })
    })
  },
})
