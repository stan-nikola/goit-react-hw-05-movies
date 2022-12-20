import { StyledLink, StyledNav } from '../AppBar/AppBar.styled';
import { Box } from 'components/Box/Box';

export const AppBar = () => {
  return (
    <Box as="header">
      <StyledNav>
        <StyledLink to="/">
          <div>Home</div>
        </StyledLink>
        <StyledLink to="/movies">
          <div>Movies</div>
        </StyledLink>
      </StyledNav>
    </Box>
  );
};
