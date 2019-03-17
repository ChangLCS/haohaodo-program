import api from './index';

const path = {
  getMovieItem: '/get/movie/item',
  getRand: '/get/rand',
  getSearch: '/get/search',
};

//  详情
const getMovieItem = (id) =>
  api.get(path.getMovieItem, {
    id,
  });

//  排名
const getRand = (page) =>
  api.get(path.getRand, {
    page,
  });

//  查询
const getSearch = (page, value) =>
  api.get(path.getSearch, {
    page,
    value,
  });

export default {
  getMovieItem,
  getRand,
  getSearch,
};
