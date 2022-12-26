import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  padding: 5px 10px;
  width: 114px;
  height: 30px;
  background-color: white;
  border-radius: 4px;
  text-decoration: none;
  background-color: red;

  margin-bottom: 15px;

  color: black;
  transition: shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;
  span {
    margin-right: 5px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: red;
    color: white;
  }
`;

export const MovieName = styled.h2`
  margin-bottom: 10px;
`;

export const MovieUserScore = styled.p`
  margin-bottom: 20px;
  span {
    margin-right: 8px;
  }
`;
export const MovieDetailsTitle = styled.h3`
  margin-bottom: 15px;
`;
export const MovieDetailsData = styled.p`
  margin-bottom: 40px;
`;
