const { queryCanvasAndRun, initShaderProgram } = require('../utils/index')

Page({
  data: {
    isBuffer: '',
  },
  onLoad() {
    setTimeout(() => {
      queryCanvasAndRun('#canvas-1', (canvas) => {
        const vs = `
        attribute vec4 a_position;
        void main() {
          gl_Position = vec4(a_position);
        }
        `

        const fs = `
        void main(void) {
          gl_FragColor = vec4(1.0, 0, 0, 1.0);
        }
        `
        const gl = canvas.getContext('webgl')
        const program = initShaderProgram(gl, vs, fs)
        const vPos = gl.getAttribLocation(program, 'a_position')
        // const texCord = gl.getAttribLocation(program, 'aTextureCord')
        // const sampler = gl.getUniformLocation(program, 'uSampler')

        const vertex = [
          -0.5, -0.5, 1.0, 1.0,
          -0.5, 0.5, 1.0, 1.0,
          // 0.5, 0.5, 1.0, 1.0 set them in bufferSubData
          0.0, 0.0, 0.0, 0.0
        ]

        const posBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)
        gl.bufferSubData(gl.ARRAY_BUFFER, 8 * 4, new Float32Array([0.5, 0.5, 1.0, 1.0]))

        // const textureCod = gl.createBuffer()
        // gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
        // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW)

        const texture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, texture)

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
        const isBuffer = gl.isBuffer(posBuffer)
        this.setData({
          isBuffer
        })
        gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(vPos)
        // gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
        // gl.vertexAttribPointer(texCord, 2, gl.FLOAT, false, 0, 0)
        // gl.enableVertexAttribArray(texCord)

        gl.useProgram(program)

        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        // gl.uniform1i(sampler, 0);

        gl.drawArrays(gl.TRIANGLES, 0, 3)
      })

      queryCanvasAndRun('#canvas-2', (canvas) => {
        const vs = `
        attribute vec4 a_position;
        attribute vec4 a_color;
        varying highp vec4 out_color;
        void main() {
          gl_Position = vec4(a_position);
          out_color = vec4(a_color);
        }
        `

        const fs = `
        varying highp vec4 out_color;
        void main(void) {
          gl_FragColor = out_color;
        }
        `
        const gl = canvas.getContext('webgl')
        const program = initShaderProgram(gl, vs, fs)
        const vPos = gl.getAttribLocation(program, 'a_position')
        const colorPos = gl.getAttribLocation(program, 'a_color')
        // const texCord = gl.getAttribLocation(program, 'aTextureCord')
        // const sampler = gl.getUniformLocation(program, 'uSampler')

        const vertex = [
          -0.5, -0.5, 1.0, 1.0,
          -0.5, 0.5, 1.0, 1.0,
          0.5, 0.5, 1.0, 1.0
        ]
        const uData = new Uint32Array([4294967295, 4294967295, 4294967295, 4294967295])
        const vbo = new Float32Array(uData.buffer)
        const posBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)

        const colorBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vbo), gl.STATIC_DRAW)

        const texture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, texture)

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
        gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0)
        gl.enableVertexAttribArray(vPos)
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
        gl.vertexAttribPointer(colorPos, 4, gl.UNSIGNED_BYTE, true, 0, 0)
        gl.enableVertexAttribArray(colorPos)

        gl.useProgram(program)

        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        // gl.uniform1i(sampler, 0);
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
      })
    })
  },
})
