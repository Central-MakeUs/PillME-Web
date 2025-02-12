import { PropsWithChildren, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ArrowRightr } from '@/assets';
import { EmailIcon } from '@/pages/onboarding/assets/EmailIcon';
import { AppBar } from '@/ui/app-bar';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { initialModalState, modalReducer } from './bottomSheetReducer';
import { BirthBottomSheet } from './components/birth-bottom-sheet';
import { NickNameBottomSheet } from './components/nick-name-bottom-sheet';
import * as styles from './page.css';

export const MyInfoManagePage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

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
        <AppBar variant="page" left={<ArrowLeft onClick={goBack} />}>
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
        <div className={styles.dialogTriggerContainer}>
          <Dialog
            trigger={<p className={styles.dialogTrigger}>로그아웃</p>}
            title="로그아웃"
            description="로그아웃 하시겠어요?"
            leftButtonText="취소"
            rightButtonText="확인"
            action="default"
          />

          <span className={styles.dialogTrigger}>|</span>
          <Dialog
            trigger={<p className={styles.dialogTrigger}>회원 탈퇴</p>}
            title="서비스 회원 탈퇴"
            description={`탈퇴 시 계정 및 이용기록은 모두 삭제돼요${'\n'}삭제된 데이터는 복구가 불가능해요`}
            leftButtonText="취소"
            rightButtonText="탈퇴하기"
            action="danger"
          />
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
