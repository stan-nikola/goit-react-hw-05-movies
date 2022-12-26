import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const SearchMovies = lazy(() =>
  import('../../pages/SearchMovies/SearchMovies')
);
const AboutMovie = lazy(() => import('../../pages/AboutMovie/AboutMovie'));
const MovieCast = lazy(() => import('../../pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../../pages/MovieReviews/MovieReviews')
);
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route index element={<SearchMovies />}></Route>
            <Route path=":movieId/" element={<AboutMovie />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
