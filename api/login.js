import apiCommon from 'wx-api-common';
import config from '../config';

const api = apiCommon.setOption({
  baseUrl: config.apiHost, //  接口的基础地址配置
  params: {},
  request: (req) => {
    //  请求拦截器
    wx.showLoading({
      title: '加载中',
    });
    req.params = {
      ...req.params,
      accessToken: config.getToken() || undefined,
    };
  },
  response: (res) => {
    //  回调拦截器
    setTimeout(() => {
      wx.hideLoading();
    }, 500);
    if (res.data.code !== 0) {
      wx.showToast({
        title: res.data.message,
        icon: 'loading',
        mask: true,
      });
    }
  },
});

const path = {
  getToken: '/get/token',
  setUserInfo: '/set/user/info',
};

const getToken = (code) =>
  api.get(path.getToken, {
    code,
  });

const setUserInfo = (form) =>
  api.post(path.setUserInfo, {
    userInfo: form.userInfo,
    signature: form.signature,
    encryptedData: form.encryptedData,
    iv: form.iv,
  });

export default {
  getToken,
  setUserInfo,
};
