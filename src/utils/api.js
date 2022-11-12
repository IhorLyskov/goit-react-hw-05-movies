import axios from 'axios';

const KEY = '59b490478b7d8f1129f5bb9350f6c53c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: KEY,
};

export async function getTrendingMovies(page) {
  const response = await axios.get('/trending/movie/day', {
    params: { ...axios.defaults.params, page },
  });
  return response.data;
}

export async function searchMovies(query) {
  const { data } = await axios.get(`/search/movie?&query=${query}`);
  return data.results;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

export async function getCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
}
