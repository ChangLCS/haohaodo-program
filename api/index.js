const apiCommon = require('../modules/wx-api-common/api/index');

export default apiCommon.setOption({
  baseUrl: 'http://localhost:3000', //  接口的基础地址配置
  params: {
    //  基础参数，即每次调用都要传的参
    access_token: 'access_token',
  },
  request: (req) => {
    //  请求拦截器
  },
  response: (res) => {
    //  回调拦截器
  },
});
