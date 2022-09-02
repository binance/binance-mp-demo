Page({
  data: {
    info: {},
    hasInfo: false,
    ids: '',
  },
  handleInput(e) {
    this.setData({
      ids: e.detail.value
    })
  },
  async requestSubscribeMessage() {
    const tmplIds = (this.data.ids || '').split(',');
    if (bn.requestSubscribeMessage) {
      try {
        const info = await bn.requestSubscribeMessage({
          tmplIds
        });
        this.setData({
          info: JSON.stringify(info, null, 2),
          hasInfo: true
        });
        console.log(info);
      } catch (e) {
        this.setData({
          info: JSON.stringify(e, null, 2),
          hasInfo: true
        });
        console.log(e);
      }
    } else {
      this.setData({
        info: JSON.stringify({
          [tmplIds[0]]: {
            type: 'accept',
            token: 'mocktoken_aaaaaaaaaaaaaaaaaaaaa'
          },
          msg: 'requestSubscribeMessage:ok'
        }, null, 2),
        hasInfo: true
      });
    }
  }
});
