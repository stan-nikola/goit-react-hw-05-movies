import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'services/themoviedbApi';
import { MovieDetailsTitle } from '../MovieCast/MovieCast.styled';
import { Box } from '@mui/system';
import { MovieReviewsItem } from './MovieReviews.styled';

const MovieReviews = () => {
  const [movieId] = useOutletContext();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId, 'reviews').then(resp =>
      setMovieReviews(resp.results)
    );
  }, [movieId]);

  if (!movieReviews) return;

  return (
    <>
      <MovieDetailsTitle>Reviews</MovieDetailsTitle>
      <Box as="ul" color="white">
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <MovieReviewsItem key={review.id}>
              <h3>Author:{review.author}</h3>
              <p>{review.content}</p>
            </MovieReviewsItem>
          ))
        ) : (
          <MovieDetailsTitle>
            We don't have any reviews for this movie.
          </MovieDetailsTitle>
        )}
      </Box>
    </>
  );
};

export default MovieReviews;
