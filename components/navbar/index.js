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
      wx.navigateBack({
        delta: 1,
      });
    },
    _home() {
      // this.triggerEvent('home', { name: 'home' });
      wx.navigateTo({
        url: '/pages/list/index?type=home',
      });
    },
  },
});
