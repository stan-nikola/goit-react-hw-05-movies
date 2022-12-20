import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home';
import { SearchMovies } from 'pages/SearchMovies';
import { AboutMovie } from 'pages/AboutMovie';
import { MovieCast } from 'pages/MovieCast';
import { MovieReviews } from 'pages/MovieReviews';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchMovies />}>
            <Route path=":movieId" element={<AboutMovie />}>
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
