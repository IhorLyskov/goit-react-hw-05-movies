import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  text-align: center;
  justify-content: center;
  position: relative;
  margin-right: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.lightGrey};
  border-radius: ${p => p.theme.radius.normal};
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 260px;
  padding-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Vote = styled.span`
  display: block;
  position: absolute;
  left: 10px;
  top: 10px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radius.normal};
  color: ${({ vote }) => (vote >= 3 && vote <= 7 ? 'text' : 'white')};
  background-color: ${({ vote }) =>
    vote < 3 ? 'red' : vote > 7 ? 'green' : 'yellow'};
`;

export const Title = styled.p`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;
