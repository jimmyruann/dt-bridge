import { RouteObject } from 'react-router-dom';
import AppLayout from '../shared/components/app-layout';
import { HomePage } from './components/home-page';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default AppRoutes;
