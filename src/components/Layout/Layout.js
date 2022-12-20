import { Box } from 'components/Box/Box';
import { AppBar } from './../AppBar/AppBar';

import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box as="main">
      <AppBar />
      <Outlet />
    </Box>
  );
};
