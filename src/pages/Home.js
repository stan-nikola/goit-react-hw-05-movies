import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/themoviedbApi';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { MovieListRender } from 'components/MovieListRender/MovieListRender';
import { override } from 'constants/loadSpinner';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingMovies()
      .then(resp => setTrendMovies(resp.results))
      .finally(setLoading(true));
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [trendMovies]);

  return (
    <>
      <MovieListRender
        title="Trending today"
        moviesArr={trendMovies}
      ></MovieListRender>
      <ScaleLoader
        color={'red'}
        loading={loading}
        cssOverride={override}
        size={500}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Home;
