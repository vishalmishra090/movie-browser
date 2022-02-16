import { axiosTMDB as axios } from "../axiosInstance";

const searchService = {
  searchMovies: ({ query, page }) => {
    return axios.get(`/search/movie`, {
      params: { query: query, page: page },
    });
  },
};

export default searchService;
