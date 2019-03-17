import getMovie from '../../api/getMovie';

Page({
  data: {
    data: {},
  },
  onLoad(params) {
    console.log(params);
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
        console.log(data);
        this.setData({
          data,
        });
      }
    });
  },
});
