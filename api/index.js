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
    return {
      ...req,
      params: {
        ...req.params,
        accessToken: config.getToken(),
      },
    };
  },
  response: (res) => {
    //  回调拦截器
  },
});
