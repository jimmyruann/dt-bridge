import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import AppNav from './app-nav';

export const AppLayout = () => {
  return (
    <>
      <AppNav
        links={[
          {
            link: '/',
            label: 'Home',
          },
        ]}
      />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default AppLayout;
