import login from './api/login';
import config from './config';

import getMovie from './api/getMovie';

//app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: (res) => {
        config.setToken();
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        login.getToken(res.code).then((res) => {
          if (res.data.code === 0) {
            config.setToken(res.data.result);
            this.getWXUserInfo();
          } else {
            wx.showToast({
              title: '服务器未响应',
              icon: 'loading',
              duration: 2000,
            });
          }
        });
      },
    });
  },
  globalData: {
    userInfo: null,
  },
  //  获取用户信息，要先换取到token之后再获取，才能返回给后台
  getWXUserInfo() {
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              this.saveInfo(res);

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
          });
        }
      },
    });
  },
  //  存储数据
  saveInfo(data) {
    login.setUserInfo(data).then((res) => {
      if (res.data.code === 0) {
        setTimeout(() => {
          wx.navigateTo({
            url: '../list/index',
          });
        }, 500);
      }
    });

    getMovie.getRand().then((res) => {
      if (res.data.code === 0) {
        console.log(res.data.result);
      }
    });
  },
});
