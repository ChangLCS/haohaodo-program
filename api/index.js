const api = require('wx-api-common');

export default api.setOption({
  baseUrl: '', //  接口的基础地址配置
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
