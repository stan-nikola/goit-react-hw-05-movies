import { Outlet, useParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';

export const SearchMovies = () => {
  const { movieId } = useParams();

  return <Box as="section">{movieId ? <Outlet /> : <>Movies Search</>}</Box>;
};
