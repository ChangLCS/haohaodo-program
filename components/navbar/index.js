//index.js
//获取应用实例
const app = getApp();

Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    isBack: {
      type: Boolean,
      value: false,
    },
    isHome: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    _back() {
      console.log('_back');
      wx.navigateBack();
    },
    _home() {
      // this.triggerEvent('home', { name: 'home' });
      wx.redirectTo({
        url: '/pages/list/index?type=home',
      });
    },
  },
});
