import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 18px;
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  color: blue;
`;

export const Button = styled.button`
font-size: 14px;
border-radius: 4px;
  color: blue;
  transition: background-color 0.3s ease, color 0.5s ease;
  &:hover,
  &:focus {
    color: white;
    background-color: blue;
    outline: none;
`;
