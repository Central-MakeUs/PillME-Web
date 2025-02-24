import { Outlet, useLocation, useNavigate } from 'react-router';
import { BottomNavigation } from '../bottom-navigation';
import { MenuItem } from '../bottom-navigation/bottom-navigation';

export const BottomNavigationLayout = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const currentPath = pathname.replace('/', '')! as MenuItem;

  return (
    <>
      <Outlet />
      <BottomNavigation
        selected={currentPath}
        onSelect={(id) => navigate(`/${id}`)}
      />
    </>
  );
};
