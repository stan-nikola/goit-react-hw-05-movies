import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { AiFillBackward } from 'react-icons/ai';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {
  GoBackLink,
  MovieName,
  MovieUserScore,
  MovieDetailsTitle,
  MovieDetailsData,
} from './AboutMovie.styled';
import { StyledLink } from './../../components/AppBar/AppBar.styled';
import { fetchMovieInfo } from 'services/themoviedbApi';
import { Box } from 'components/Box/Box';
import { IMAGE_PATH } from 'services/themoviedbApi';
import { override } from 'constants/loadSpinner';

const AboutMovie = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieInfo(movieId, '').then(setMovieData);
    window.scrollTo({
      top: 0,
    });
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
      <GoBackLink to={backLinkHref}>
        <span>
          <AiFillBackward />
        </span>
        Go back
      </GoBackLink>
      <Box display="flex" color="white" mb={30}>
        <img
          onLoad={() => setLoading(false)}
          src={IMAGE_PATH + poster_path}
          alt={original_title}
          width={300}
        />
        <Box ml={30} maxWidth={500}>
          <MovieName>
            {original_title + `(${new Date(release_date).getFullYear()})`}
          </MovieName>
          <MovieUserScore>
            <span>User score:</span>
            {Math.round(vote_average * 10)}%
          </MovieUserScore>
          <MovieDetailsTitle>Overview</MovieDetailsTitle>
          <MovieDetailsData>{overview}</MovieDetailsData>
          <MovieDetailsTitle>Genres</MovieDetailsTitle>
          <MovieDetailsData>
            {genres.map(genre => genre.name).join(', ')}
          </MovieDetailsData>
          <Box>
            <MovieDetailsTitle>Additional information</MovieDetailsTitle>
            <Box display="flex">
              <StyledLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </StyledLink>
              <StyledLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </StyledLink>
            </Box>
          </Box>
        </Box>
        <ScaleLoader
          color={'red'}
          loading={loading}
          cssOverride={override}
          size={500}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Box>
      <Suspense>
        <Outlet context={[movieId]} />
      </Suspense>
    </>
  );
};

export default AboutMovie;
