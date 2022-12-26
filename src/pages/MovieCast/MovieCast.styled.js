import styled from 'styled-components';

export const MovieDetailsTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
`;

export const MovieCastList = styled.li`
  margin: 0;
  padding: 0;
  max-width: 120px;
  color: white;

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

export const MovieCastImg = styled.img`
  margin: 0;
  object-fit: cover;
  height: 200px;
`;

export const MovieActorData = styled.p`
  padding: 5px 5px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
