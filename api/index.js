import apiCommon from 'wx-api-common';
import config from '../config';

export default apiCommon.setOption({
  baseUrl: config.apiHost, //  接口的基础地址配置
  params: {
    //  基础参数，即每次调用都要传的参
    accessToken: config.getToken() || undefined,
  },
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
      });
    }
  },
});
