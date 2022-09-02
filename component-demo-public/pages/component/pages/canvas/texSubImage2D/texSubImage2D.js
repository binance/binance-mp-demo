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
      1.0, 1.0,
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
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_BORDER);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_BORDER);
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

    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1024;
    const height = 1024;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array(width * height * 4).fill(1).map((value, index) => {
      if (index % 4 === 2 || index % 4 === 3) {
        return 255
      } else {
        return 0
      }
    }); // opaque blue
    const size = 512
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
      width, height, border, srcFormat, srcType,
      pixel);

    if (type === 'buffer') {
      gl.texSubImage2D(
        gl.TEXTURE_2D,
        0,
        0,
        0,
        size,
        size,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        new Uint8Array(size * size * 4).fill(1).map((value, index) => {
          if (index % 4 === 0 || index % 4 === 3) {
            return 255
          } else {
            return 0
          }
        })
      );
      draw()
    } else if (type === 'image') {
      const image = canvas.createImage()
      image.onload = () => {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, image)
        draw()
      }
      image.onerror = (err) => {
        console.error('image.onerror', err)
      }

      const fs = bn.getFileSystemManager()
      fs.readFile({
        filePath: 'pages/component/pages/canvas/texSubImage2D/bg.jpg',
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
      canvas.width = 512
      canvas.height = 512
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, 512, 512);
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, canvas)
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
        this.drawTexImage2D(canvas, gl, 'buffer')
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
        this.drawTexImage2D(canvas, gl, 'image')
      })
    })
  }
})