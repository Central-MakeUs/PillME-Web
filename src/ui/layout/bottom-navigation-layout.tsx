import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { isLogin } from '@/utils/isLogin';
import { BottomNavigation } from '../bottom-navigation';
import { MenuItem } from '../bottom-navigation/bottom-navigation';
import { Dialog } from '../dialog';

export const BottomNavigationLayout = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const currentPath = pathname.replace('/', '')! as MenuItem;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Outlet />
      <BottomNavigation
        selected={currentPath}
        onSelect={(id) => (isLogin() ? navigate(`/${id}`) : setIsOpen(true))}
      />
      <Dialog
        title="로그인이 필요한 서비스에요"
        description="지금 필미에 가입하고 모든 기능을 사용해보세요!"
        leftButtonText="취소"
        rightButtonText="확인"
        open={isOpen}
        action="default"
        onConfirm={() => navigate('/login')}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
