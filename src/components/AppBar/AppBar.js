import { StyledLink, StyledLogoLink, StyledNav } from '../AppBar/AppBar.styled';
import { Box } from 'components/Box/Box';
import logo from '../../images/logo-movie-logo-film-tape-cinema.png';

export const AppBar = () => {
  return (
    <Box as="header">
      <StyledNav>
        <StyledLogoLink to="/">
          <img src={logo} alt="logo" width={50} />
          <span>Movies</span>
        </StyledLogoLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
    </Box>
  );
};
