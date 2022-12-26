import styled from 'styled-components';
import { AiFillBackward } from 'react-icons/ai';
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

export const UpButtonIcon = styled(AiFillBackward)`
  rotate: 90deg;
  width: 40px;
  height: 40px;
`;
export const UpButton = styled.button`
  position: fixed;
  bottom: 2%;
  right: 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
  transition: shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    color: white;
  }
`;
