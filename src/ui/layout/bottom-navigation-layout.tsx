import { Outlet } from 'react-router';
import { BottomNavigation } from '../bottom-navigation';

export const BottomNavigationLayout = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
};
