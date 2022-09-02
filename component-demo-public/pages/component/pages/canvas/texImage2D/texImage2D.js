const { initShaderProgram } = require('../utils/index')
const vs = `
attribute vec2 a_position;
attribute vec2 aTextureCord;
varying highp vec2 vTextureCoord;
void main() {
  gl_Position = vec4(a_position, 1.0, 1.0);
  vTextureCoord = aTextureCord;
}
`

const fs = `
varying highp vec2 vTextureCoord;
uniform sampler2D uSampler;
void main(void) {
  gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
Page({
  drawTexImage2D(canvas, gl, type) {
    const vertex = [
      -0.5, -0.5,
      -0.5, 0.5,
      0.5, 0.5,
    ]
    const textureCoordinates = [
      0.0, 0.0,
      0.0, 1.0,
      1.0, 1.0
    ]

    const program = initShaderProgram(gl, vs, fs)
    const vPos = gl.getAttribLocation(program, 'a_position')
    const texCord = gl.getAttribLocation(program, 'aTextureCord')
    const sampler = gl.getUniformLocation(program, 'uSampler')

    const posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)

    const textureCod = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW)

    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)

    function draw() {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.clearColor(1.0, 1.0, 1.0, 1.0); // Clear to black, fully opaque
      gl.clearDepth(1.0); // Clear everything
      gl.enable(gl.DEPTH_TEST); // Enable depth testing
      gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    
      // Clear the canvas before we start drawing on it.
    
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
      gl.vertexAttribPointer(vPos, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(vPos)
      gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
      gl.vertexAttribPointer(texCord, 2, gl.FLOAT, false, 0, 0)
      gl.enableVertexAttribArray(texCord)
      
      gl.useProgram(program)
  
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(sampler, 0);
  
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    if (type === 'buffer') {
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 1;
      const height = 1;
      const border = 0;
      const srcFormat = gl.RGBA;
      const srcType = gl.UNSIGNED_BYTE;
      const pixel = new Uint8Array([0, 0, 255, 255]); // opaque blue
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
        width, height, border, srcFormat, srcType,
        pixel);
      draw()
    } else if (type === 'image') {
      const image = canvas.createImage()
      image.onload = () => {
        console.log(image)
        console.log('image.onload, texImage2D')
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
        draw()
      }
      image.onerror = (err) => {
        console.error('image.onerror', err)
      }

      const fs = bn.getFileSystemManager()
      fs.readFile({
        filePath: 'pages/component/pages/canvas/texImage2D/bg.jpg',
        success({ data }) {
          console.log('bn.readFile success')
          image.src = bn.createBufferURL(data)
        },
        fail(err) {
          console.error('read file error', err)
        }
      })
    } else if (type === 'canvas') {
      const canvas = bn.createOffscreenCanvas()
      const { screenHeight, screenWidth } = bn.getSystemInfoSync()
      canvas.width = screenWidth
      canvas.height = screenHeight
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.fillRect(0, 0, screenWidth, screenHeight);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
      draw()
    }
  },
  onLoad() {
    setTimeout(() => {
      bn.createSelectorQuery()
      .select('#canvas-1')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const gl = canvas.getContext('webgl')
        this.drawTexImage2D(canvas, gl, 'image')
      })

      bn.createSelectorQuery()
      .select('#canvas-2')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const gl = canvas.getContext('webgl')
        this.drawTexImage2D(canvas, gl, 'canvas')
      })

      bn.createSelectorQuery()
      .select('#canvas-3')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const gl = canvas.getContext('webgl')
        this.drawTexImage2D(canvas, gl, 'buffer')
      })
    })
  }
})