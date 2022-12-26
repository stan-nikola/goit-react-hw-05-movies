import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto 0;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: linear-gradient(
    -45deg,
    #3f51b1 0%,
    #5a55ae 13%,
    #7b5fac 25%,
    #8f6aae 38%,
    #a86aa4 50%,
    #cc6b8e 62%,
    #f18271 75%,
    #f3a469 87%,
    #f7c978 100%
  );
  background-size: 400% 400%;
  position: relative;
  animation: animate 7.5s ease-in-out infinite;

  @keyframes animate {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const StyledLogoLink = styled(Link)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  transition: scale 250ms linear;

  font-size: 25px;
  font-weight: 700;
  @media screen and (max-width: 650px) {
    display: none;
  }

  &:hover,
  &:focus {
    scale: 1.03;
  }
`;
export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 20px;
  width: 70px;
  height: 30px;
  background-color: white;
  border-radius: 4px;
  text-decoration: none;

  color: black;
  transition: box-shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: red;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    background-color: red;
    color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
