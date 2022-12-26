import { useLocation } from 'react-router-dom';

import { Box } from 'components/Box/Box';
import { IMAGE_PATH } from 'services/themoviedbApi';
import {
  MovieList,
  MovieTitle,
  MovieLink,
  MovieHomeTitle,
} from './MovieListRender.styled';

export const MovieListRender = ({ moviesArr, title }) => {
  const location = useLocation();

  if (moviesArr.results === []) {
    return;
  }

  return (
    <>
      {title && <MovieHomeTitle>{title}</MovieHomeTitle>}
      <Box
        as="ul"
        padding={0}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gridGap={20}
      >
        {moviesArr.map(({ id, original_title, poster_path }) => (
          <MovieList key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={IMAGE_PATH + poster_path}
                alt={original_title}
                width={150}
                height={220}
              />
              <MovieTitle>{original_title}</MovieTitle>
            </MovieLink>
          </MovieList>
        ))}
      </Box>
    </>
  );
};
