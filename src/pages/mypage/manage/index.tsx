import { PropsWithChildren, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ArrowRightr } from '@/assets';
import { EmailIcon } from '@/pages/onboarding/assets/EmailIcon';
import { AppBar } from '@/ui/app-bar';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { initialModalState, modalReducer } from './bottomSheetReducer';
import { BirthBottomSheet } from './components/birth-bottom-sheet';
import { NickNameBottomSheet } from './components/nick-name-bottom-sheet';
import * as styles from './page.css';

export const MyInfoManagePage = () => {
  const navigate = useNavigate();
  const [{ isBirthModalOpen, isNicknameModalOpen }, dispatch] = useReducer(
    modalReducer,
    initialModalState,
  );

  const handleOpenNicknameModal = () => {
    dispatch({ type: 'OPEN_NICKNAME_MODAL' });
  };

  const handleOpenBirthModal = () => {
    dispatch({ type: 'OPEN_BIRTH_MODAL' });
  };

  const handleCloseAllModals = () => {
    dispatch({ type: 'CLOSE_ALL_MODALS' });
  };

  const MOCK_MY_INFO_LIST = [
    {
      label: '아이디',
      value: 'pillme1234@naver.com',
    },
    {
      label: '닉네임',
      value: '김필미1234',
      onClick: handleOpenNicknameModal,
    },
    {
      label: '생년월일',
      value: '2000.04.29',
      onClick: handleOpenBirthModal,
    },
    {
      label: '휴대폰 번호',
      value: '010-1234-1234',
    },
  ];

  return (
    <PageLayout
      header={
        <AppBar variant="page" left={<ArrowLeft />}>
          내 정보 관리
        </AppBar>
      }
    >
      <div className={styles.container}>
        <div className={styles.list}>
          {MOCK_MY_INFO_LIST.map(({ label, value, onClick }) => (
            <div className={styles.item} key={label}>
              <div>
                <h4 className={styles.label}>{label}</h4>
                <Spacer size={10} />
                {label === '아이디' ? (
                  <EmailContainer>
                    <p className={styles.value}>{value}</p>
                  </EmailContainer>
                ) : (
                  <p className={styles.value}>{value}</p>
                )}
              </div>
              {onClick && (
                <IconButton onClick={onClick}>
                  <ArrowRightr />
                </IconButton>
              )}
            </div>
          ))}
        </div>
      </div>
      <NickNameBottomSheet
        open={isNicknameModalOpen}
        onOpenChange={handleCloseAllModals}
        initialNickName="김필미1234"
      />
      <BirthBottomSheet
        open={isBirthModalOpen}
        onOpenChange={handleCloseAllModals}
        initialBirth="1998.11.18"
      />
    </PageLayout>
  );
};

const EmailContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.emailContainer}>
      <EmailIcon />
      {children}
    </div>
  );
};
