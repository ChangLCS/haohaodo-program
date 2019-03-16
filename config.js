const tokenName = 'access_token';

const setToken = (value) => wx.setStorageSync('access_token', value);
const getToken = () => {
  let value = null;
  try {
    value = wx.getStorageSync(tokenName);
  } catch (error) {
    value = null;
  }
  return value;
};

export default {
  apiHost: 'https://api.haohaodo.com',
  setToken,
  getToken,
};
