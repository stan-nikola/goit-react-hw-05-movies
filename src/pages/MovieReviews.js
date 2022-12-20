import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'services/themoviedbApi';

export const MovieReviews = () => {
  const [movieId] = useOutletContext();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId, 'reviews').then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) return;

  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.results.map(review => (
          <li key={review.id}>
            <h3>Author:{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </ul>
  );
};
