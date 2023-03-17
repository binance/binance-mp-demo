Page({
    data: {
        formats: {},
        readOnly: false,
        placeholder: '开始输入...',
        editorStyle:"height: 300px",
        toolbarStyle: "bottom: 0px",
        isIOS: false,
        hashSvg: '',
        redoSvg: '',
        undoSvg: ''
      },
      readOnlyChange() {
        this.setData({
          readOnly: !this.data.readOnly
        })
      },
      createSvgUrl(path) {
       const url = bn.createBufferURL(this.fs.readFileSync(path), { extension: 'svg'})
       return url
      },
      onLoad() {
        this.fs = bn.getFileSystemManager()
        this.setData({
          hashSvg: this.createSvgUrl('pages/component/pages/editor/hashTag.svg'),
          redoSvg: this.createSvgUrl('pages/component/pages/editor/redo.svg'),
          undoSvg: this.createSvgUrl('pages/component/pages/editor/undo.svg'),
        })
        // console.log('👀 ---hash', hashBuffer)
        // fs.readFileSync('pages/component/pages/editor/hashTag.svg')
        const platform = bn.getSystemInfoSync().platform
        const isIOS = platform === 'iOS'
        this.setData({ isIOS})
        if (platform === 'devtools') {
            this.updatePosition(50)
            return 
        }
        const that = this
        this.updatePosition(0)
        let keyboardHeight = 0
        bn.onKeyboardHeightChange(res => {
          if (res.height === keyboardHeight) return
          const duration = res.height > 0 ? res.duration * 1000 : 0
          keyboardHeight = res.height
          setTimeout(() => {
            bn.pageScrollTo({
              scrollTop: 0,
              success() {
                that.updatePosition(keyboardHeight)
                that.editorCtx.scrollIntoView()
              }
            })
          }, duration)
    
        })
      },
      updatePosition(keyboardHeight) {
        const toolbarHeight = 50
        // 2.62.0 issue with getSystemInfoSync
        const { windowHeight } = bn.getWindowInfo()
        let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
        this.setData({ editorStyle: `height:${editorHeight}px`, toolbarStyle: `bottom: ${this.data.isIOS ? keyboardHeight : 0}px` })
      },
      calNavigationBarAndStatusBar() {
        const systemInfo = bn.getWindowInfo()
        const { statusBarHeight, platform } = systemInfo
        const isIOS = platform === 'ios'
        const navigationBarHeight = isIOS ? 44 : 48
        return statusBarHeight + navigationBarHeight
      },
      onEditorReady(e) {
        const that = this
        bn.createSelectorQuery().select('#editor').context(function (res) {
          that.editorCtx = res.context
         
        }).exec()
      },
      blur() {
        this.editorCtx.blur()
      },
     
       
      insertDivider() {
        this.editorCtx.insertDivider({
          success: function () {
            console.log('insert divider success')
          }
        })
      },
      clear() {
        this.editorCtx.clear({
          success: function (res) {
            console.log("clear success")
          }
        })
      },
      removeFormat() {
        this.editorCtx.removeFormat()
      },
      insertDate() {
        const date = new Date()
        const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        this.editorCtx.insertText({
          text: formatDate
        })
      },
      redo() {
        this.editorCtx.redo()
      },
      undo() {
        this.editorCtx.undo()
      },
      async insertImage() {
        const that = this
        try {
          const res = await bn.chooseImage({
            count: 3,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera']
          })
          console.log('👀chooseImage - res', res)
          
            that.editorCtx.insertImage({
              //   src: 'https://nemodivingcenter.com/wp-content/uploads/2023/01/logo-nemo-diving.webp',
                src: res.tempFilePaths[0],
             
                success: (res) => {
                  console.log('👀 insertImage success',res  )
                },
                fail: (err) => {
                  console.log('👀 insertImage failed',err  )
                }
               
              })

        } catch(e) {
          console.error(e)
          bn.showModal({ title: 'ERROR', content: 'Permission Denied or no photo found' })
        }
       
    },
    async format(e) {
        let { name, value } = e.target.dataset
        if (!name) return
        console.log('👀format', name, value)
        await this.editorCtx.format(name, value)
        this.focus()
    },
    focus() {
      this.editorCtx.focus()
    },
 
    insertHashTag() {
        this.editorCtx.insertHashTag({
            content: 'aaa'
        })
    },
    bindstatuschange(e) {
        console.log('👀----bindstatuschange-: ', e)
        this.setData({
          formats: e.mark
      })
       
    },
    bindselectionupdate(e) {
        console.log('👀----bindSelectionUpdate-: ', e)
        this.setData({
          formats: e.mark
      })
    
    },
    bindinput(e) {
        console.log('👀----bindinput-: ', e, this.data.isIOS)
    },
    bindfocus(e) {
        console.log('👀----bindfocus-: ', e)
    },
    bindblur(e) {
        console.log('👀----bindblur-: ', e)
    },
    // handleStartHashtag(res) {
    //     console.log('---handleStartHashtag', res)
    // },
    // handleEndHashtag(res) {
    //     console.log('---handleEndHashtag', res)
    // },
    // handleUpdateHashtag(res) {
    //     console.log('---handleUpdateHashtag', res)
    // }
})
