import { Outlet } from 'react-router';
import { BottomNavigation } from '../bottom-navigation/index.ts';

export const BottomNavigationLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
};
