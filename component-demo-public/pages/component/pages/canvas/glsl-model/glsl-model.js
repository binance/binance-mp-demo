const { queryCanvasAndRun, initShaderProgram, Matrix4 } = require('../utils/index')

var tick = () => {}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    lastX: 0,
    lastY: 0,
    currentAngle: [0.0, 0.0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    setTimeout(() => {
      queryCanvasAndRun('#canvas', (canvas) => {
        const gl = canvas.getContext('webgl')
        // 顶点着色器程序
        var VSHADER_SOURCE =
          'attribute vec4 a_Position;\n' + //位置
          'attribute vec2 a_TexCoord;\n' + //颜色
          'varying vec2 v_TexCoord;\n' + //纹理坐标
          'uniform mat4 u_MvpMatrix;\n' +
          'void main() {\n' +
          '  gl_Position = u_MvpMatrix * a_Position;\n' + // 设置顶点坐标
          '  v_TexCoord = a_TexCoord;\n' + //纹理坐标
          '}\n'
  
        // 片元着色器程序
        var FSHADER_SOURCE =
          'precision mediump float;\n' +
          'uniform sampler2D u_Sampler;\n' +
          'varying vec2 v_TexCoord;\n' + //纹理坐标
          'void main() {\n' +
          '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
          '}\n'
        const program = initShaderProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE)
        gl.useProgram(program)
        //定义一个矩形体：混合构造函数原型模式
        function Cuboid(minX, maxX, minY, maxY, minZ, maxZ) {
          this.minX = minX
          this.maxX = maxX
          this.minY = minY
          this.maxY = maxY
          this.minZ = minZ
          this.maxZ = maxZ
        }
  
        Cuboid.prototype = {
          constructor: Cuboid,
          CenterX: function () {
            return (this.minX + this.maxX) / 2.0
          },
          CenterY: function () {
            return (this.minY + this.maxY) / 2.0
          },
          CenterZ: function () {
            return (this.minZ + this.maxZ) / 2.0
          },
          LengthX: function () {
            return this.maxX - this.minX
          },
          LengthY: function () {
            return this.maxY - this.minY
          },
        }
  
        var curScale = 1.0 //当前的缩放比例
  
        function main() {
          //加载文件
          const fs = bn.getFileSystemManager()
          const gltf = fs.readFileSync('/pages/component/pages/canvas/glsl-model/data/new.gltf', 'utf-8')
          const gltfObj = JSON.parse(gltf)
  
          const bin = fs.readFileSync('/pages/component/pages/canvas/glsl-model/data/new.bin')
          const image = canvas.createImage()
          image.onload = () => {
            onDraw(gl, canvas, gltfObj, bin, image)
          }
          image.src = bn.createBufferURL(fs.readFileSync('/pages/component/pages/canvas/glsl-model/data/bg.jpg'))
          // 获取WebGL渲染上下文
          if (!gl) {
            console.log('Failed to get the rendering context for WebGL')
            return
          }
          
          // 初始化着色器
          if (!program) {
            console.log('Failed to intialize shaders.')
            return
          }
  
          // 指定清空<canvas>的颜色
          gl.clearColor(0.0, 0.0, 1.0, 1.0)
  
          // 开启深度测试
          gl.enable(gl.DEPTH_TEST)
  
          //清空颜色和深度缓冲区
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        }
  
        //绘制函数
        function onDraw(gl, canvas, gltfObj, binBuf, image) {
          // 设置顶点位置
          var n = initVertexBuffers(gl, gltfObj, binBuf)
          if (n < 0) {
            console.log('Failed to set the positions of the vertices')
            return
          }
  
          //设置纹理
          if (!loadTexture(gl, image)) {
            console.log('Failed to set the Texture!')
          }

  
          //绘制函数
          tick = () => {
            //设置MVP矩阵
            setMVPMatrix(gl, canvas, gltfObj.cuboid)
  
            //清空颜色和深度缓冲区
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  
            //绘制矩形体
            gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_SHORT, 0)
  
            //请求浏览器调用tick
            // requestAnimationFrame(tick);
          }
          //开始绘制
          tick()
        }
  
        function loadTexture(gl, image) {
          // 创建纹理对象
          var texture = gl.createTexture()
          if (!texture) {
            console.log('Failed to create the texture object')
            return false
          }
  
          // 开启0号纹理单元
          gl.activeTexture(gl.TEXTURE0)
          // 绑定纹理对象
          gl.bindTexture(gl.TEXTURE_2D, texture)
  
          // 设置纹理参数
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  
          // 配置纹理图像
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
  
          // 将0号单元纹理传递给着色器中的取样器变量
          var u_Sampler = gl.getUniformLocation(program, 'u_Sampler')
          if (!u_Sampler) {
            console.log('Failed to get the storage location of u_Sampler')
            return false
          }
          gl.uniform1i(u_Sampler, 0)
  
          return true
        }
        //设置MVP矩阵
        const setMVPMatrix = (gl, canvas, cuboid) => {
          console.log(this)
          // Get the storage location of u_MvpMatrix
          var u_MvpMatrix = gl.getUniformLocation(program, 'u_MvpMatrix')
          if (!u_MvpMatrix) {
            console.log('Failed to get the storage location of u_MvpMatrix')
            return
          }
  
          //模型矩阵
          var modelMatrix = new Matrix4()
          modelMatrix.scale(curScale, curScale, curScale)
          modelMatrix.rotate(this.data.currentAngle[0], 1.0, 0.0, 0.0) // Rotation around x-axis
          modelMatrix.rotate(this.data.currentAngle[1], 0.0, 1.0, 0.0) // Rotation around y-axis
          modelMatrix.translate(
            -cuboid.CenterX(),
            -cuboid.CenterY(),
            -cuboid.CenterZ()
          )
  
          //投影矩阵
          var fovy = 60
          var near = 1
          var projMatrix = new Matrix4()
          projMatrix.setPerspective(fovy, canvas.width / canvas.height, 1, 10000)
  
          //计算lookAt()函数初始视点的高度
          var angle = ((fovy / 2) * Math.PI) / 180.0
          var eyeHight = (cuboid.LengthY() * 1.2) / 2.0 / angle
  
          //视图矩阵
          var viewMatrix = new Matrix4() // View matrix
          viewMatrix.lookAt(0, 0, eyeHight, 0, 0, 0, 0, 1, 0)
  
          //MVP矩阵
          var mvpMatrix = new Matrix4()
          mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix)
  
          //将MVP矩阵传输到着色器的uniform变量u_MvpMatrix
          gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements)
        }
  
        //
        function initVertexBuffers(gl, gltfObj, binBuf) {
          //获取顶点数据位置信息
          var positionAccessorId =
            gltfObj.meshes[0].primitives[0].attributes.POSITION
          if (gltfObj.accessors[positionAccessorId].componentType != 5126) {
            return 0
          }
  
          var positionBufferViewId =
            gltfObj.accessors[positionAccessorId].bufferView
          var verticesColors = new Float32Array(
            binBuf,
            gltfObj.bufferViews[positionBufferViewId].byteOffset,
            gltfObj.bufferViews[positionBufferViewId].byteLength /
              Float32Array.BYTES_PER_ELEMENT
          )
  
          gltfObj.cuboid = new Cuboid(
            gltfObj.accessors[positionAccessorId].min[0],
            gltfObj.accessors[positionAccessorId].max[0],
            gltfObj.accessors[positionAccessorId].min[1],
            gltfObj.accessors[positionAccessorId].max[1],
            gltfObj.accessors[positionAccessorId].min[2],
            gltfObj.accessors[positionAccessorId].max[2]
          )
  
          // 创建缓冲区对象
          var vertexColorBuffer = gl.createBuffer()
          var indexBuffer = gl.createBuffer()
          if (!vertexColorBuffer || !indexBuffer) {
            console.log('Failed to create the buffer object')
            return -1
          }
  
          // 将缓冲区对象绑定到目标
          gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer)
          // 向缓冲区对象写入数据
          gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW)
  
          //获取着色器中attribute变量a_Position的地址
          var a_Position = gl.getAttribLocation(program, 'a_Position')
          if (a_Position < 0) {
            console.log('Failed to get the storage location of a_Position')
            return -1
          }
  
          // 将缓冲区对象分配给a_Position变量
          gl.vertexAttribPointer(
            a_Position,
            3,
            gl.FLOAT,
            false,
            gltfObj.bufferViews[positionBufferViewId].byteStride,
            gltfObj.accessors[positionAccessorId].byteOffset
          )
  
          // 连接a_Position变量与分配给它的缓冲区对象
          gl.enableVertexAttribArray(a_Position)
  
          //获取顶点数据纹理信息
          var txtCoordAccessorId =
            gltfObj.meshes[0].primitives[0].attributes.TEXCOORD_0
          if (gltfObj.accessors[txtCoordAccessorId].componentType != 5126) {
            return 0
          }
          var txtCoordBufferViewId =
            gltfObj.accessors[txtCoordAccessorId].bufferView
  
          //获取着色器中attribute变量a_TxtCoord的地址
          var a_TexCoord = gl.getAttribLocation(program, 'a_TexCoord')
          if (a_TexCoord < 0) {
            console.log('Failed to get the storage location of a_TexCoord')
            return -1
          }
          // 将缓冲区对象分配给a_Color变量
          gl.vertexAttribPointer(
            a_TexCoord,
            2,
            gl.FLOAT,
            false,
            gltfObj.bufferViews[txtCoordBufferViewId].byteStride,
            gltfObj.accessors[txtCoordAccessorId].byteOffset
          )
          // 连接a_Color变量与分配给它的缓冲区对象
          gl.enableVertexAttribArray(a_TexCoord)
  
          //获取顶点数据索引信息
          var indicesAccessorId = gltfObj.meshes[0].primitives[0].indices
          var indicesBufferViewId =
            gltfObj.accessors[indicesAccessorId].bufferView
          var indices = new Uint16Array(
            binBuf,
            gltfObj.bufferViews[indicesBufferViewId].byteOffset,
            gltfObj.bufferViews[indicesBufferViewId].byteLength /
              Uint16Array.BYTES_PER_ELEMENT
          )
  
          // 将顶点索引写入到缓冲区对象
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
  
          return indices.length
        }
  
        main()
      })
    })
  },
  onTouchMove(ev) {
    const x = ev.touches[0].x;
    const y = ev.touches[0].y;
    const factor = 0.2; // The rotation ratio
    const dx = factor * (x - this.data.lastX);
    const dy = factor * (y - this.data.lastY);
    this.setData({
      currentAngle: [this.data.currentAngle[0] + dy, this.data.currentAngle[1] + dx],
      lastX: x,
      lastY: y,
    });
    tick();
  },
  onTouchStart(ev) {
    const x = ev.touches[0].x;
    const y = ev.touches[0].y;
    this.setData({
      lastX: x,
      lastY: y,
    });
  }
})
