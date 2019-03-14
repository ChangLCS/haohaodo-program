import apiCommon from 'wx-api-common';

import config from '../config';

const api = apiCommon.setOption({
  baseUrl: 'http://localhost:3000', //  接口的基础地址配置
  params: {},
  request: (req) => {
    req.params = {
      ...req.params,
      accessToken: config.getToken(),
    };
  },
  response: (res) => {
    //  回调拦截器
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
    rawData: form.rawData,
    signature: form.signature,
    encryptedData: form.encryptedData,
    iv: form.iv,
  });

export default {
  getToken,
  setUserInfo,
};
