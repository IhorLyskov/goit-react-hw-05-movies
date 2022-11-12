import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const KeyLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radius.normal};
  padding: ${p => p.theme.space[2]}px;
  margin: 8px 8px 8px 0;
  min-width: 100px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.blue};

  &.active {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${p => p.theme.colors.blue};
    box-shadow: 2px 2px 4px rgba(1, 180, 228, 0.5),
      -2px -2px 4px rgba(1, 180, 228, 0.5);
  }
`;
