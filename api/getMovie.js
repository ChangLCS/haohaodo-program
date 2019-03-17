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

export default {
  getRand,
};
