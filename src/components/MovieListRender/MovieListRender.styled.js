import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieHomeTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
`;

export const MovieList = styled.li`
  list-style: none;
  width: 150px;
  background-color: #d4cedf4a;
  gap: 20px;
  border-radius: 4px;
  overflow: hidden;
  transition: scale 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    scale: 1.03;
    box-shadow: 23px -36px 55px -17px rgba(255, 107, 8, 0.76);
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  text-align: center;
  padding: 5px 7px;
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
