import { axiosTMDB as axios } from "../axiosInstance";

const movieService = {
  getMovies: ({ page = 1, filter }) => {
    return axios.get(`/movie/${filter}`, {
      params: { page },
    });
  },

  getMovie: ({ id }) => {
    return axios.get(`/movie/${id}`);
  },

  getCredits: ({ id }) => {
    return axios.get(`/movie/${id}/credits`);
  },

  searchMovies: ({ query, page }) => {
    return axios.get(`/search/movie`, {
      params: { query: query, page: page },
    });
  },
};

export default movieService;
