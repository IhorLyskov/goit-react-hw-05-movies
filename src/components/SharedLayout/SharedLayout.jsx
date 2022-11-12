import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '../Box/Box';
import { Header, Logo, Navigation } from './SharedLayout.styled';
import { KeyLink } from '../KeyLink/KeyLink.styled';

import Loader from '../Loader/Loader';
import logo from '../../images/tmdb.svg';

const SharedLayout = () => {
  return (
    <Box maxWidth={1400} mx="auto">
      <Header>
        <Logo to="/">
          <img src={logo} alt="logo" width={80} />
        </Logo>
        <Navigation>
          <KeyLink to="/" end>
            Home
          </KeyLink>
          <KeyLink to="/movies">Movies</KeyLink>
        </Navigation>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default SharedLayout;
