import styled from 'styled-components';

export const SearchTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
  color: white;
`;

export const SearchInput = styled.input`
  min-width: 300px;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  color: white;
  transition: border-color 250ms linear;

  &:hover,
  &:focus {
    border-color: red;
  }
`;
export const SearchForm = styled.form`
  position: relative;
  margin-bottom: 30px;
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  transition: color 250ms linear;

  svg {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    color: red;
  }
`;

export const SearchNotification = styled.p`
  text-align: center;
  color: white;
  margin-bottom: 15px;
  span {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
