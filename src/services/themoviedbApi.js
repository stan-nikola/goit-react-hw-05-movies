export const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
export const BASE_URL = 'https://api.themoviedb.org';
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

export const fetchMovieById = async movieId => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieInfo = async (movieId, info) => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${movieId}/${info}?api_key=${API_KEY}`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
