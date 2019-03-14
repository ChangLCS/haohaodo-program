import apiCommon from 'wx-api-common';

const api = apiCommon.setOption({
  baseUrl: 'http://localhost:3000', //  接口的基础地址配置
  params: {},
  request: (req) => {
    //  请求拦截器
  },
  response: (res) => {
    //  回调拦截器
  },
});

const path = {
  getToken: '/get/token',
};

const getToken = (code) =>
  api.get(path.getToken, {
    code,
  });

module.exports = {
  getToken,
};
