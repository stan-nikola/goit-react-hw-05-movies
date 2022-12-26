import { Box } from 'components/Box/Box';
import { AppBar } from './../AppBar/AppBar';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const Layout = () => {
  return (
    <Box as="main">
      <AppBar />
      <Suspense fallback={null}>
        <Box as="section" padding="30px 60px" bg="#202021" minHeight="100vh">
          <Outlet />
        </Box>
      </Suspense>
    </Box>
  );
};
