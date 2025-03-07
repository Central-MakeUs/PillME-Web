import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Cart } from '@/assets';
import { AppBarElement } from '@/ui/app-bar';
import { Dialog } from '@/ui/dialog';
import { isLogin } from '@/utils/isLogin';

export const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const goCartPage = () => navigate('/cart');

  const goLoginPage = () => navigate('/login');

  return (
    <>
      <AppBarElement onClick={isLogin() ? goCartPage : () => setIsOpen(true)}>
        <Cart />
      </AppBarElement>
      <Dialog
        title="로그인이 필요한 서비스에요"
        description="지금 필미에 가입하고 모든 기능을 사용해보세요!"
        leftButtonText="취소"
        rightButtonText="확인"
        open={isOpen}
        action="default"
        onConfirm={goLoginPage}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
