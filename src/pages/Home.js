import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/themoviedbApi';

import { MovieListRender } from 'components/MovieListRender/MovieListRender';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => setTrendMovies(resp.results));
  }, []);

  return <MovieListRender moviesArr={trendMovies} />;
};
