Page({
  onLoad() {
    bn.getFileSystemManager().writeFileSync(
      `${bn.env.USER_DATA_PATH}/hello.txt`,
      'hello world',
      'utf-8'
    )
  },
  data: {
    filePath: 'pages/packageAPI/pages/read-file/text.json',
    encoding: "utf-8",
    fileContent: "",
    writeFileContent: "",
    imageSrc: "",
    writeFileMessage: "",
    mkdirMessage: "",
    writeImageSrc: "",
    accessMessage: "",
    copyStatus: '',
    copyStatus2: '',
    zipStatus: ''
  },
  onEncodingInput(e) {
    this.setData({
      encoding: e.detail.value
    })
  },
  onPathInput(e) {
    this.setData({
      filePath: e.detail.value
    })
  },
  onImageError(e) {
    console.log("onImageError", e)
  },
  async readFile() {
    try {
      const encoding = this.data.encoding && this.data.encoding.trim()
      const fs = bn.getFileSystemManager()
      const res = await fs.readFile({
        filePath: this.data.filePath,
        encoding: encoding || undefined
      })
      if (!encoding) {
        const url = bn.createBufferURL(res.data)
        this.setData({ imageSrc: url, fileContent: "" })
      } else {
        this.setData({ fileContent: res.data, imageSrc: "" })
      }
    } catch (error) {
      console.log('error: ', `error: ${JSON.stringify(error)}`)
    }
  },
  readFileSync() {
    console.log('readFileSync ==>');
    try {
      const encoding = this.data.encoding && this.data.encoding.trim()
      const fs = bn.getFileSystemManager()
      const res = fs.readFileSync(
        this.data.filePath,
        encoding || undefined
      )
      if (!encoding) {
        const url = bn.createBufferURL(res)
        this.setData({ imageSrc: url, fileContent: "" })
      } else {
        this.setData({ fileContent: res, imageSrc: "" })
      }
    } catch (error) {
      console.log('error: ', `error: ${JSON.stringify(error)}`)
    }
  },
  writeLocalFileButtonClick() {
    this.writeFile("/foo.txt")
  },
  writeLocalFileButtonSyncClick() {
    this.writeFileSync("/foo.txt")
  },
  writeFileButtonClick() {
    this.writeFile(bn.env.USER_DATA_PATH + "/foo.txt")
  },
  writeFileButtonSyncClick() {
    this.writeFileSync(bn.env.USER_DATA_PATH + "/foo.txt")
  },
  writeATextFileButtonClick() {
    this.writeFile(bn.env.USER_DATA_PATH + "/foo/bar/a.txt")
  },
  writeATextFileButtonSyncClick() {
    this.writeFile(bn.env.USER_DATA_PATH + "/foo/bar/a.txt")
  },
  mkdirWriteFile(e) {
    const { path, recursive = false } = e.target.dataset
    this.mkdirFile(bn.env.USER_DATA_PATH + path, Boolean(recursive))
  },
  mkdirWriteFileSync(e) {
    const { path, recursive = false } = e.target.dataset
    this.mkdirFileSync(bn.env.USER_DATA_PATH + path, Boolean(recursive))
  },
  mkdirWriteFileFail(e) {
    const { path, recursive = false } = e.target.dataset
    this.mkdirFile(path, Boolean(recursive))
  },
  mkdirWriteFileSyncFail(e) {
    const { path, recursive = false } = e.target.dataset
    this.mkdirFileSync(path, Boolean(recursive))
  },
  writeFile(path, encoding) {
    const fs = bn.getFileSystemManager()
    const _this = this
    fs.writeFile({
      filePath: path,
      data: 'writeFile, Hello world',
      encoding: encoding,
      success(res) {
        _this.setData({ writeFileMessage: res.errMsg })
        const text = fs.readFileSync(path, encoding || 'utf8')
        _this.setData({ writeFileContent: text})
      },
      fail(err) {
        _this.setData({ writeFileMessage: JSON.stringify(err)})
      }
    })
  },
  writeFileSync(path, encoding) {
    const fs = bn.getFileSystemManager()
    try {
      fs.writeFileSync(path, 'writeFileSync, Hello world', encoding)
      this.setData({ writeFileMessage: 'writeFileSync: ok'})
      const text = fs.readFileSync(path, encoding || 'utf8')
      this.setData({ writeFileContent: text})
    } catch (e) {
      this.setData({ writeFileMessage: JSON.stringify(e)})
    }
  },
  writeJPGFile() {
    const fs = bn.getFileSystemManager()
    const data = fs.readFileSync(
      'pages/packageAPI/pages/read-file/diamonds.png'
    )
    const _this = this
    fs.writeFile({
      filePath: `${bn.env.USER_DATA_PATH}/foo.jpg`,
      data,
      encoding: 'binary',
      success(res) {
        _this.setData({ writeFileMessage: res.errMsg })
        _this.setData({ writeImageSrc: `${bn.env.USER_DATA_PATH}/foo.jpg`})
      },
      fail(err) {
        _this.setData({
          writeFileMessage: JSON.stringify(err)
        })
      }
    })
  },
  writeJPGFileSync() {
    const fs = bn.getFileSystemManager()
    const data = fs.readFileSync(
      'pages/packageAPI/pages/read-file/diamonds.png'
    )
    try {
      fs.writeFileSync(`${bn.env.USER_DATA_PATH}/foo.jpg`, data, 'binary')
      this.setData({ writeFileMessage: 'writeFileSync: ok'})
      this.setData({ writeImageSrc: `${bn.env.USER_DATA_PATH}/foo.jpg`})
    } catch (err) {
      this.setData({ writeFileMessage: JSON.stringify(err)})
    }
  },
  mkdirFile(path, recursive) {
    const fs = bn.getFileSystemManager()
    const _this = this
    fs.mkdir({
      dirPath: path,
      recursive,
      success(res) {
        console.log('setMkdir ', res.errMsg)
        _this.setData({ mkdirMessage: res.errMsg})
      },
      fail(err) {
        _this.setData({ mkdirMessage: JSON.stringify(err)})
      }
    })
  },
  mkdirFileSync(path, recursive) {
    const fs = bn.getFileSystemManager()
    try {
      fs.mkdirSync(path, recursive)
      this.setData({ mkdirMessage: 'mkdirFileSync: ok'})
    } catch (e) {
      this.setData({ mkdirMessage: JSON.stringify(e)})
    }
  },
  access(e) {
    const { path } = e.target.dataset
    const fs = bn.getFileSystemManager()
    const _this = this
    fs.access({
      path,
      success(res) {
        console.log('setAccess ', res.errMsg)
        _this.setData({ accessMessage: res.errMsg})
      },
      fail(err) {
        _this.setData({ accessMessage: JSON.stringify(err)})
      }
    })
  },
  accessSync(e) {
    const { path } = e.target.dataset
    const fs = bn.getFileSystemManager()
    try {
      fs.accessSync(path)
      this.setData({ accessMessage: 'access: ok'})
    } catch (e) {
      this.setData({ accessMessage: JSON.stringify(e)})
    }
  },
  radioChange(e){
    if (e.detail.value === 'json') {
      this.setData({
        filePath: 'pages/packageAPI/pages/read-file/text.json',
        encoding: "utf-8"
      })
    } else {
      this.setData({
        filePath: 'pages/packageAPI/pages/read-file/diamonds.png',
        encoding: null
      })
    }
  },
  copyFile() {
    bn.getFileSystemManager().copyFile({
      srcPath: `${bn.env.USER_DATA_PATH}/hello.txt`,
      destPath: `${bn.env.USER_DATA_PATH}/test-hello.txt`
    })
  },
  copyFileSync() {
    bn.getFileSystemManager().copyFileSync(
      `${bn.env.USER_DATA_PATH}/hello.txt`,
      `${bn.env.USER_DATA_PATH}/test-hello2.txt`
    )
  },
  unzipFile() {
    bn.getFileSystemManager().unzip({
      zipFilePath: `pages/packageAPI/pages/read-file/unzip-test.zip`,
      targetPath: `${bn.env.USER_DATA_PATH}/unzip-test`,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.error(err)
      }
    })
  },
  checkFile() {
    try {
      bn.getFileSystemManager().accessSync(`${bn.env.USER_DATA_PATH}/test-hello.txt`)
      this.setData({
        copyStatus: 'true'
      })
    } catch (e) {
      this.setData({
        copyStatus: 'false'
      })
    }
  },
  checkSyncFile() {
    try {
      bn.getFileSystemManager().accessSync(`${bn.env.USER_DATA_PATH}/test-hello2.txt`)
      this.setData({
        copyStatus2: 'true'
      })
    } catch (e) {
      this.setData({
        copyStatus2: 'false'
      })
    }
  },
  checkUnzip() {
    try {
      bn.getFileSystemManager().accessSync(`${bn.env.USER_DATA_PATH}/unzip-test`)
      this.setData({
        zipStatus: 'true'
      })
    } catch (e) {
      this.setData({
        zipStatus: 'false'
      })
    }
  }
})