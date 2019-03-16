import api from './index';

const path = {
  getMovieItem: '/get/movie/item',
  getRand: '/get/rand',
  getSearch: '/get/search',
};

const getRand = () => api.get(path.getRand);

export default {
  getRand,
};
