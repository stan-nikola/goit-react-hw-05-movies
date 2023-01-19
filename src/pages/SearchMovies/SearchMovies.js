import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { Box } from 'components/Box/Box';
import { MovieListRender } from 'components/MovieListRender/MovieListRender';
import { fetchMovieByName } from '../../services/themoviedbApi';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchTitle,
  SearchNotification,
} from './SearchMovies.styled';
import { override } from 'constants/loadSpinner';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let savedQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!savedQuery) {
      setSearchMovies([]);

      return;
    }
    fetchMovieByName(savedQuery).then(resp => {
      setSearchMovies(resp.results);
      setLoading(false);
    });
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (!query.trim() || savedQuery === query.trim().toLowerCase()) {
      setQuery('');

      setLoading(false);
      return;
    }
    setSearchParams({ query: query.trim().toLowerCase() });
    setQuery('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <SearchTitle>movie search</SearchTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={e => {
            setQuery(e.currentTarget.value);
          }}
          value={query}
          type="text"
        ></SearchInput>
        <SearchButton type="submit">
          <AiOutlineSearch />
        </SearchButton>
      </SearchForm>

      {!savedQuery && (
        <SearchNotification>Enter movie name to search</SearchNotification>
      )}

      {savedQuery &&
        savedQuery.toLowerCase() === query.trim().toLowerCase() && (
          <SearchNotification>
            <span>{savedQuery}</span> successfully found!
          </SearchNotification>
        )}

      {searchMovies.length <= 0 && savedQuery && (
        <SearchNotification>
          <span> {savedQuery}</span> movie not found
        </SearchNotification>
      )}
      <MovieListRender moviesArr={searchMovies} />
      <ScaleLoader
        color={'red'}
        loading={loading}
        cssOverride={override}
        size={500}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default SearchMovies;
