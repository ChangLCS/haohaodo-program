import getMovie from '../../api/getMovie';

const app = getApp();

Page({
  data: {
    data: {},
  },
  onLoad(params) {
    //  分享按钮
    wx.showShareMenu({
      withShareTicket: true,
    });

    getMovie.getMovieItem(params.id).then((res) => {
      if (res.data.code === 0) {
        const data = res.data.result;
        data.genresArr = data.genres.split(',');
        data.rating = Number(data.rating).toFixed(1);
        data.directorsArr = data.directorsArr.map((item) => ({
          ...item,
          type: 1,
        }));
        data.castsArr = data.castsArr.map((item) => ({
          ...item,
          type: 2,
        }));
        data.person = [...data.directorsArr, ...data.castsArr];
        this.setData({
          data,
        });
      }
    });
  },
});
