import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchMovieInfo } from 'services/themoviedbApi';
import { IMAGE_PATH } from 'services/themoviedbApi';
import { Box } from 'components/Box/Box';
import actorPlaceholder from '../images/actor-placeholder.jpg';

export const MovieCast = () => {
  const [movieId] = useOutletContext();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId, 'credits').then(setMovieCredits);
  }, [movieId]);

  if (!movieCredits) return;

  return (
    <Box as="ul" display="flex" flexWrap="wrap" gridGap={20}>
      {movieCredits.cast.map(
        ({ id, profile_path, original_name, character }) => (
          <li key={id}>
            {profile_path ? (
              <img
                width={100}
                src={IMAGE_PATH + profile_path}
                alt={original_name}
              />
            ) : (
              <img width={100} src={actorPlaceholder} alt={original_name} />
            )}
            <p>{original_name}</p>
            <p>Character:{character} </p>
          </li>
        )
      )}
    </Box>
  );
};
