const { Matrix4 } = require('./matrix')

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }
  gl.program = shaderProgram
  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function queryCanvasAndRun(selector, callback) {
  bn.createSelectorQuery()
  .select(selector)
  .fields({ node: true, size: true })
  .exec(res => {
    const canvas = res[0].node
    callback(canvas)
  })
}

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

class Triangle {
  _program = null
  _gl = null
  vertex = [
    -0.5, -0.5, 1.0, 1.0,
    -0.5, 0.5, 1.0, 1.0,
    0.5, 0.5, 1.0, 1.0
  ]
  constructor(gl, options = {}) {
    this._gl = gl
    this.init()
    if (Array.isArray(options.vertex)) {
      this.vertex = options.vertex
    }
  }
  init() {
    this._program = initShaderProgram(this._gl, vs, fs)
  }

  draw() {
    const gl = this._gl
    const program = this._program
    const vPos = gl.getAttribLocation(program, 'a_position')
    // const texCord = gl.getAttribLocation(program, 'aTextureCord')
    // const sampler = gl.getUniformLocation(program, 'uSampler')

    const vertex = this.vertex
    const textureCoordinates = [
      0.0, 0.0,
      0.0, 1.0,
      1.0, 1.0
    ]

    const posBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW)

    // const textureCod = gl.createBuffer()
    // gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW)

    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.vertexAttribPointer(vPos, 4, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vPos)
    // gl.bindBuffer(gl.ARRAY_BUFFER, textureCod)
    // gl.vertexAttribPointer(texCord, 2, gl.FLOAT, false, 0, 0)
    // gl.enableVertexAttribArray(texCord)
    
    gl.useProgram(program)

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // gl.uniform1i(sampler, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
}

module.exports = {
  initShaderProgram,
  queryCanvasAndRun,
  Triangle,
  Matrix4
}