import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { fetchMovieInfo } from 'services/themoviedbApi';
import { IMAGE_PATH } from 'services/themoviedbApi';
import { Box } from 'components/Box/Box';
import actorPlaceholder from '../../images/actor-placeholder.jpg';
import { override } from 'constants/loadSpinner';
import { UpButton, UpButtonIcon } from './MovieCast.styled';
import { upToTop } from 'constants/upToTop';

import {
  MovieCastList,
  MovieDetailsTitle,
  MovieCastImg,
  MovieActorData,
} from './MovieCast.styled';

const MovieCast = () => {
  const [movieId] = useOutletContext();
  const [movieCredits, setMovieCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieInfo(movieId, 'credits').then(setMovieCredits);
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
    }, 300);
  }, [movieCredits]);

  if (!movieCredits) return;

  return (
    <>
      <MovieDetailsTitle>Cast</MovieDetailsTitle>
      <Box as="ul" display="flex" flexWrap="wrap" gridGap={20} bg="#202021">
        {movieCredits.cast.map(
          ({ id, profile_path, original_name, character }) => (
            <MovieCastList key={id}>
              {profile_path ? (
                <MovieCastImg
                  src={IMAGE_PATH + profile_path}
                  alt={original_name}
                  width={120}
                  height={200}
                />
              ) : (
                <MovieCastImg src={actorPlaceholder} alt={original_name} />
              )}
              <MovieActorData>{original_name}</MovieActorData>
              <MovieActorData>
                Character: <span>{character}</span>
              </MovieActorData>
            </MovieCastList>
          )
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

export default MovieCast;
