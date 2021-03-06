//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    });
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      };
    }
  },
  getUserInfo(e) {
    if (!e.detail.userInfo) {
      wx.showToast({
        title: '请授权登录使用',
        icon: 'loading',
      });
      return;
    }
    app.globalData.userInfo = e.detail.userInfo;
    app.getWXUserInfo();
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
  //  前往推荐页
  goRand() {
    wx.navigateTo({
      url: '/pages/list/index?type=home',
    });
  },
});
