import { PropsWithChildren, Suspense } from 'react';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { deleteUserAPI, logout } from '@/apis/mutation/user';
import { userQueryOption } from '@/apis/query/user';
import { ArrowLeft, ArrowRightr } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { Loading } from '@/pages/loading';
import { EmailIcon } from '@/pages/onboarding/assets/EmailIcon';
import { AppBar } from '@/ui/app-bar';
import { Dialog } from '@/ui/dialog';
import { IconButton } from '@/ui/icon-button';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { useShowCustomToast } from '@/ui/toast/toast';
import { BirthBottomSheet } from './components/birth-bottom-sheet';
import { NickNameBottomSheet } from './components/nick-name-bottom-sheet';
import { useBottomSheet } from './hooks/useBottomSheet';
import * as styles from './page.css';

export const MyInfoManagePage = () => {
  return (
    <LocalErrorBoundary>
      <Suspense fallback={<Loading />}>
        <MyInfoManageInner />
      </Suspense>
    </LocalErrorBoundary>
  );
};

export const MyInfoManageInner = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const {
    isBirthModalOpen,
    isNicknameModalOpen,
    handleOpenNicknameModal,
    handleOpenBirthModal,
    handleCloseAllModals,
  } = useBottomSheet();

  const toast = useShowCustomToast();

  const { mutate } = useMutation({
    mutationFn: deleteUserAPI,
    onSuccess: () => {
      toast('회원탈퇴가 완료되었어요', 'remove', '', false);
    },
  });

  const {
    data: {
      data: { nickname, email, birthDate },
    },
  } = useSuspenseQuery(userQueryOption.all());

  const MOCK_MY_INFO_LIST = [
    {
      label: '아이디',
      value: email,
    },
    {
      label: '닉네임',
      value: nickname,
      onClick: handleOpenNicknameModal,
    },
    {
      label: '생년월일',
      value: birthDate,
      onClick: handleOpenBirthModal,
    },
  ];

  return (
    <PageLayout
      header={
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          exit={{ opacity: 0, x: 50 }}
        >
          <AppBar variant="page" left={<ArrowLeft onClick={goBack} />}>
            내 정보 관리
          </AppBar>
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        exit={{ opacity: 0, x: 50 }}
        className={styles.container}
      >
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
            onConfirm={() => {
              logout();
              toast('로그아웃 되었어요', 'remove', '', false);
              navigate('/');
            }}
          />

          <span className={styles.dialogTrigger}>|</span>
          <Dialog
            trigger={<p className={styles.dialogTrigger}>회원 탈퇴</p>}
            title="서비스 회원 탈퇴"
            description={`탈퇴 시 계정 및 이용기록은 모두 삭제돼요${'\n'}삭제된 데이터는 복구가 불가능해요`}
            leftButtonText="취소"
            rightButtonText="탈퇴하기"
            action="danger"
            onConfirm={() => {
              mutate();
            }}
          />
        </div>
      </motion.div>
      <NickNameBottomSheet
        open={isNicknameModalOpen}
        onOpenChange={handleCloseAllModals}
        initialNickName={nickname}
      />
      <BirthBottomSheet
        open={isBirthModalOpen}
        onOpenChange={handleCloseAllModals}
        initialBirth={birthDate}
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
