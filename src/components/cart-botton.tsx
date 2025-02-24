import { useNavigate } from 'react-router';
import { Cart } from '@/assets';
import { AppBarElement } from '@/ui/app-bar';

export const CartButton = () => {
  const navigate = useNavigate();

  const goCartPage = () => navigate('/cart');

  return (
    <AppBarElement onClick={goCartPage}>
      <Cart />
    </AppBarElement>
  );
};
