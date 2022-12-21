import { useParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Link } from 'react-router-dom';

export const MovieListRender = ({ moviesArr }) => {
  const qwe = useParams();
  console.log('dsfsdfdsf', qwe);

  if (moviesArr.results === []) {
    return;
  }
  return (
    <Box as="section" display="flex" flexDirection="column">
      <ul>
        {moviesArr.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
