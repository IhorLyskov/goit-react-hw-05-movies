import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.lightGrey};
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  margin-left: 8px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
