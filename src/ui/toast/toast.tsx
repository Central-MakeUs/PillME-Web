import { useNavigate } from 'react-router';
import { Toaster, toast } from 'sonner';
import { CheckCir, ErrorCir, Trash, WarningCir } from '@/assets';
import * as styles from './toast.css';

const ICONS = {
  remove: <Trash />,
  success: <CheckCir />,
  alert: <WarningCir />,
  error: <ErrorCir />,
};

// ✅ 커스텀 훅으로 변환
export const useShowCustomToast = () => {
  const navigate = useNavigate();

  return (
    message: string,
    type: keyof typeof ICONS = 'remove',
    routePath?: string,
    showIcon: boolean = true,
  ) => {
    toast.custom(
      (t) => (
        <div className={styles.toastContainer}>
          {showIcon && ICONS[type]}
          <span className={styles.message}>{message}</span>
          {routePath && (
            <div
              className={styles.btnMessage}
              onClick={() => {
                toast.dismiss(t);
                navigate(routePath);
              }}
            >
              보러가기
            </div>
          )}
        </div>
      ),
      {
        position: 'bottom-center',
        duration: 4000,
      },
    );
  };
};

export const CustomToastProvider = () => {
  return <Toaster />;
};
