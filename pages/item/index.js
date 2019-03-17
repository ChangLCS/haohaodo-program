//logs.js
const util = require('../../utils/util.js');

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
        console.log(data);
        this.setData({
          data,
        });
      }
    });
  },
});
