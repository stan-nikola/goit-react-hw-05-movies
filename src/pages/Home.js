import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/themoviedbApi';
import { Box } from '../components/Box/Box';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(resp => setTrendMovies(resp.results));
  }, []);

  if (trendMovies === []) {
    return;
  }

  return (
    <Box as="section" display="flex" flexDirection="column">
      <ul>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
