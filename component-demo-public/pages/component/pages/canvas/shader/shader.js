const vertexShader = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 1.0, 1.0);
}
`
const fragmentShader = `
void main() {
  gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
`

Page({
  data: {
    vertexShader,
    fragmentShader,
    vStatus: '',
    fStatus: '',
    linkStatus: '',
    vSource: '',
    fSource: '',
    vMessage: '',
    fMessage: '',
    attachedShader: null,
  },
  onLoad() {
    setTimeout(() => {
      bn.createSelectorQuery()
      .select('#canvas')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const gl = canvas.getContext('webgl')
        const program = gl.createProgram()

        const vShader = gl.createShader(gl.VERTEX_SHADER)
        const fShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(vShader, this.data.vertexShader)
        gl.compileShader(vShader)
        
        gl.shaderSource(fShader, this.data.fragmentShader)
        gl.compileShader(fShader)

        const vSource = gl.getShaderSource(vShader)
        const fSource = gl.getShaderSource(fShader)

        this.setData({
          vSource,
          fSource
        })

        const vStatus = gl.getShaderParameter(vShader, gl.COMPILE_STATUS)
        const fStatus = gl.getShaderParameter(fShader, gl.COMPILE_STATUS)
        this.setData({
          vStatus: vStatus,
          fStatus: fStatus,
        })

        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);

        gl.linkProgram(program);
        const linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS)
        this.setData({
          linkStatus: linkStatus
        })

        const attachedShaders = gl.getAttachedShaders(program)
        this.setData({
          attachedShader: attachedShaders.map((item) => Object.prototype.toString.call(item))
        })

        const vMessage = gl.getShaderInfoLog(vShader);
        const fMessage = gl.getShaderInfoLog(fShader);

        this.setData({
          vMessage,
          fMessage
        })

        gl.detachShader(program, vShader)
        gl.detachShader(program, fShader)

        setTimeout(() => {
          const detachedShader = gl.getAttachedShaders(program)
          this.setData({
            detachedShader: detachedShader.map((item) => Object.prototype.toString.call(item))
          })
        })

      })
    })
  }
})