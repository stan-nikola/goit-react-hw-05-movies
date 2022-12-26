export const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
export const BASE_URL = 'https://api.themoviedb.org';
export const FETCH_BY_NAME_PATH = 'https://api.themoviedb.org/3/search/movie';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieInfo = async (movieId, info) => {
  let response = {};
  try {
    if (info === '') {
      response = await fetch(
        `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`
      );
    } else {
      response = await fetch(
        `${BASE_URL}/3/movie/${movieId}/${info}?api_key=${API_KEY}`
      );
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByName = async query => {
  try {
    const response = await fetch(
      `${FETCH_BY_NAME_PATH}?api_key=${API_KEY}&query=${query}`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
