const {
  queryCanvasAndRun,
  Triangle,
  initShaderProgram,
} = require('../utils/index')

Page({
  onLoad() {
    setTimeout(() => {
      queryCanvasAndRun('#canvas-1', (canvas) => {
        const gl = canvas.getContext('webgl')
        gl.clearColor(255, 0, 0, 255)
        gl.clear(gl.COLOR_BUFFER_BIT)
      })
    })

    setTimeout(() => {
      queryCanvasAndRun('#canvas-2', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl, {
          vertex: [
            -0.5, -0.5, 1.0, 1.0, -0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0,
          ],
        })
        gl.clearDepth(0.5) // Clear everything
        gl.enable(gl.DEPTH_TEST) // Enable depth testing
        gl.depthFunc(gl.LEQUAL) // Near things obscure far things

        // Clear the canvas before we start drawing on it.

        gl.clear(gl.DEPTH_BUFFER_BIT)
        triangle.draw()
      })
    })
    setTimeout(() => {
      queryCanvasAndRun('#canvas-3', (canvas) => {
        const gl = canvas.getContext('webgl')
        const triangle = new Triangle(gl, {
          vertex: [
            -0.5, -0.5, 1.0, 1.0, -0.5, 0.5, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0,
          ],
        })
        gl.clearDepth(1) // Clear everything
        gl.enable(gl.DEPTH_TEST) // Enable depth testing
        gl.depthFunc(gl.LEQUAL) // Near things obscure far things

        // Clear the canvas before we start drawing on it.

        gl.clear(gl.DEPTH_BUFFER_BIT)
        triangle.draw()
      })
    })

    setTimeout(() => {
      queryCanvasAndRun('#canvas-4', (canvas) => {
        canvas.height = 100
        canvas.width = 100
        const gl = canvas.getContext('webgl')

        const vs = `
  attribute vec4 position;

  void main() {
    gl_Position = position;
    gl_PointSize = 64.0;
  }
  `

        const fs = `
  precision mediump float;

  uniform sampler2D tex;

  void main() {
     gl_FragColor = texture2D(tex, gl_PointCoord.xy);
  }
  `

        const program = initShaderProgram(gl, vs, fs)
        const posLoc = gl.getAttribLocation(program, 'position')

        // Create a texture to render to
        const targetTextureWidth = 128
        const targetTextureHeight = 128
        const targetTexture = createTexture(gl)

        {
          // define size and format of level 0
          const level = 0
          const internalFormat = gl.RGBA
          const border = 0
          const format = gl.RGBA
          const type = gl.UNSIGNED_BYTE
          const data = null
          gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            targetTextureWidth,
            targetTextureHeight,
            border,
            format,
            type,
            data
          )
        }

        // Create and bind the framebuffer
        const fb = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb)

        // attach the texture as the first color attachment
        const attachmentPoint = gl.COLOR_ATTACHMENT0
        const level = 0
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          attachmentPoint,
          gl.TEXTURE_2D,
          targetTexture,
          level
        )

        // create a depth-stencil renderbuffer
        const depthStencilBuffer = gl.createRenderbuffer()
        gl.bindRenderbuffer(gl.RENDERBUFFER, depthStencilBuffer)

        // make a depth-stencil buffer and the same size as the targetTexture
        gl.renderbufferStorage(
          gl.RENDERBUFFER,
          gl.DEPTH_STENCIL,
          targetTextureWidth,
          targetTextureHeight
        )
        gl.framebufferRenderbuffer(
          gl.FRAMEBUFFER,
          gl.DEPTH_STENCIL_ATTACHMENT,
          gl.RENDERBUFFER,
          depthStencilBuffer
        )

        function createTexture(gl, color) {
          const tex = gl.createTexture()
          gl.bindTexture(gl.TEXTURE_2D, tex)
          // set the filtering so we don't need mips
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
          if (color) {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              1,
              1,
              0,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              new Uint8Array(color)
            )
          }
          return tex
        }

        // create a red texture and a green texture
        const redTex = createTexture(gl, [255, 0, 0, 255])
        const greenTex = createTexture(gl, [0, 255, 0, 255])

        gl.enable(gl.STENCIL_TEST)

        gl.useProgram(program)
        gl.clearColor(0, 0, 1, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.bindTexture(gl.TEXTURE_2D, redTex)
        gl.stencilFunc(
          gl.ALWAYS, // the test
          1, // reference value
          0xff // mask
        )
        gl.stencilOp(
          gl.KEEP, // what to do if the stencil test fails
          gl.KEEP, // what to do if the depth test fails
          gl.REPLACE // what to do if both tests pass
        )

        // draw a 64x64 pixel red rect in middle
        gl.drawArrays(gl.POINTS, 0, 1)

        gl.stencilFunc(
          gl.EQUAL, // the test
          1, // reference value
          0xff // mask
        )
        gl.stencilOp(
          gl.KEEP, // what to do if the stencil test fails
          gl.KEEP, // what to do if the depth test fails
          gl.KEEP // what to do if both tests pass
        )

        // draw a green 64x64 pixel square in the
        // upper right corner. The stencil will make
        // it not go outside the red square
        gl.vertexAttrib2f(posLoc, 0.5, 0.5)
        gl.bindTexture(gl.TEXTURE_2D, greenTex)
        gl.drawArrays(gl.POINTS, 0, 1)

        // draw the framebuffer's texture to
        // the canvas. we should see a 32x32
        // red square with the bottom right corner
        // green showing the stencil worked. That will
        // be surrounded by blue to show the texture
        // we were rendering to is larger than the
        // red square. And that will be surrounded
        // by purple since we're drawing a 64x64
        // point on a 128x128 canvas which we clear
        // purple.
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        gl.clearColor(1, 0, 1, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.vertexAttrib2f(posLoc, 0.0, 0.0)
        gl.bindTexture(gl.TEXTURE_2D, targetTexture)
        gl.drawArrays(gl.POINTS, 0, 1)
      })
    })
  },
})
