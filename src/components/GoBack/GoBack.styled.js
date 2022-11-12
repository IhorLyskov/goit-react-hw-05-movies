import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBack = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radius.normal};
  padding: ${p => p.theme.space[3]}px;
  min-width: 100px;
  margin: 20px 0 ${p => p.theme.space[5]}px 16px;
  border: none;
  display: inline-block;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.blue};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
    box-shadow: 2px 2px 4px rgba(1, 180, 228, 0.5),
      -2px -2px 4px rgba(1, 180, 228, 0.5);
  }
`;
export default GoBack;
