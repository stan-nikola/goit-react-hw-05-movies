import { useState, useEffect } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { MovieListRender } from 'components/MovieListRender/MovieListRender';
import { fetchMovieByName } from './../services/themoviedbApi';

export const SearchMovies = () => {
  const { movieId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const savedQuery = searchParams.get('query');

  useEffect(() => {
    if (!savedQuery) {
      setSearchMovies([]);
      return;
    }
    fetchMovieByName(savedQuery).then(resp => setSearchMovies(resp.results));
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <Box as="section">
      {movieId ? (
        <Outlet />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={query} type="text"></input>
            <button type="submit">Search</button>
          </form>
        </>
      )}
      <MovieListRender moviesArr={searchMovies} />
    </Box>
  );
};
