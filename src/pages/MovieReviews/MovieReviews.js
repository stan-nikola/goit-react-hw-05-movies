import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'services/themoviedbApi';
import { MovieDetailsTitle } from '../MovieCast/MovieCast.styled';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { Box } from 'components/Box/Box';
import { MovieReviewsItem } from './MovieReviews.styled';
import { SearchNotification } from 'pages/SearchMovies/SearchMovies.styled';
import { override } from 'constants/loadSpinner';
import { UpButton, UpButtonIcon } from './../MovieCast/MovieCast.styled';
import { upToTop } from 'constants/upToTop';

const MovieReviews = () => {
  const [movieId] = useOutletContext();
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovieInfo(movieId, 'reviews').then(resp =>
      setMovieReviews(resp.results)
    );
  }, [movieId]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth',
      });
      setLoading(false);
    }, 500);
  }, [movieReviews]);

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
          <SearchNotification>
            We don't have any reviews for this movie.
          </SearchNotification>
        )}
        <UpButton type="button" onClick={upToTop}>
          <UpButtonIcon />
        </UpButton>
      </Box>
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

export default MovieReviews;
