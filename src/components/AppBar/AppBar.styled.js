import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  padding: 30px;
  background: grey;
  height: 30px;
`;

export const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;
