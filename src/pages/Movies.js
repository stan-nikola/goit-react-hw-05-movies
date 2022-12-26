import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => (
  <Suspense>
    <Outlet />
  </Suspense>
);

export default Movies;
