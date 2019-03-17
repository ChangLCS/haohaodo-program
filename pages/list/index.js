//logs.js
const util = require('../../utils/util.js');

import getMovie from '../../api/getMovie';

Page({
  data: {
    title: '树洞的电影推荐',
    list: [],
    page: 0,
  },
  onLoad(params) {
    this.getList(params);
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map((log) => {
    //     return util.formatTime(new Date(log));
    //   }),
    // });
  },
  getList(params) {
    switch (params.type) {
      case 'home':
        this.getRand(this.data.page);
        break;
      default:
        break;
    }
  },
  onReachBottom() {
    this.setData({
      page: this.data.page + 1,
    });
    this.getList({ type: 'home' });
  },
  getRand(page) {
    getMovie.getRand(page).then((res) => {
      if (res.data.code === 0) {
        const data = res.data.result;
        for (let i = 0; i < data.length; i += 1) {
          data[i].genresArr = data[i].genres.split(',');
          data[i].rating = Number(data[i].rating).toFixed(1);
        }
        this.setData({
          list: [...this.data.list, ...data],
        });
      }
    });
  },
  goItem(e) {
    wx.navigateTo({
      url: `/pages/item/index?id=${e.currentTarget.dataset.data.id}`,
    });
  },
});
