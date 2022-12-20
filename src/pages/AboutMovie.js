import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/themoviedbApi';
import { Box } from 'components/Box/Box';
import { IMAGE_PATH } from 'services/themoviedbApi';

export const AboutMovie = () => {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetchMovieById(movieId).then(setMovieData);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieData;

  if (!release_date) return;

  return (
    <>
      <Link to="/">Go Back</Link>
      <Box display="flex">
        <img src={IMAGE_PATH + poster_path} alt={original_title} width={300} />
        <div>
          <h2>{original_title + `(${release_date.slice(0, 4)})`}</h2>
          <p>
            <span>User score:</span>
            {Math.round(vote_average * 10)}%
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </Box>
      <Box>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Box>
      <Outlet context={[movieId]} />
    </>
  );
};
