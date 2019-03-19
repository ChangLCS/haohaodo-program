import getMovie from '../../api/getMovie';

Page({
  data: {
    title: '树洞的电影推荐',
    list: [],
    page: 0,
    value: '',
    type: 'home',
  },
  onLoad() {
    this.setData({
      type: 'home',
    });
    this.getList();
  },
  getList() {
    switch (this.data.type) {
      case 'home':
        this.getRand(this.data.page);
        break;
      case 'search':
        this.getSearch(this.data.page, this.data.value);
      default:
        break;
    }
  },
  onReachBottom() {
    this.setData({
      page: this.data.page + 1,
    });
    this.getList();
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
  //  查询电影
  goSearch(e) {
    //  点搜索按钮是 e.detail.value.value，直接在键盘完成搜索是 e.detail.value
    const value = e.detail.value.value || e.detail.value;
    if (!value && value !== 0) {
      wx.showToast({
        title: '请输入要搜索的关键字',
        icon: 'none',
      });
      return;
    }
    this.setData({
      type: 'search',
      page: 0,
      list: [],
      value,
    });
    this.getList();
  },
  //  要跑去查询了
  getSearch(page, value) {
    getMovie.getSearch(page, value).then((res) => {
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
  //  前往详情页
  goItem(e) {
    wx.navigateTo({
      url: `/pages/item/index?id=${e.currentTarget.dataset.data.id}`,
    });
  },
});
