import api from './index';

const path = {
  getMovieItem: '/get/movie/item',
  getRand: '/get/rand',
  getSearch: '/get/search',
};

const getRand = (page) =>
  api.get(path.getRand, {
    page,
  });

const getMovieItem = (id) =>
  api.get(path.getMovieItem, {
    id,
  });

export default {
  getRand,
  getMovieItem,
};
