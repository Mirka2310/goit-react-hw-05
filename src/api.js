import axios from "axios";

axios.defaults.headers.common["accept"] = "application/json";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  language: "en-US",
  api_key: "aa14fda38a7ea224619fe8e21af42a7a"
};

export const trendingMovies = async (page) => {
  const { data } = await axios.get(`movie/popular?page=${page}`);
  return data;
};

export const moviesOnQuery = async (query, page) => {
  const { data } = await axios.get(`search/movie?query=${query}&include_adult=true&page=${page}`);
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews?page=1`);
  return data;
};