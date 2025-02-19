import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';
import { ArrowRightr, Cart } from '@/assets';
import { LocalErrorBoundary } from '@/components/LocalErrorBoundary';
import { userQueryOption } from '@/query/user';
import { AppBar, AppBarElement } from '@/ui/app-bar';
import { PageLayout } from '@/ui/layout/page-layout';
import { Spacer } from '@/ui/spacer/spacer';
import { EmailIcon } from '../onboarding/assets/EmailIcon';
import * as styles from './page.css';

export const MyPage = () => {
  const navigate = useNavigate();

  const goCartPage = () => navigate('/cart');

  return (
    <PageLayout
      header={
        <AppBar
          right={
            <AppBarElement onClick={goCartPage}>
              <Cart />
            </AppBarElement>
          }
          className={styles.appBar}
        >
          마이페이지
        </AppBar>
      }
    >
      <LocalErrorBoundary>
        <Suspense>
          <MyPageInner />
        </Suspense>
      </LocalErrorBoundary>
      {CONTENT_LIST.map(({ title, listItemList }) => (
        <Fragment key={title}>
          <div className={styles.separator} />
          <section className={styles.listContainer}>
            <h3 className={styles.listTitle}>{title}</h3>
            <Spacer size={20} />
            <div className={styles.listItemContainer}>
              {listItemList.map(({ text }) => (
                <div className={styles.item} key={text}>
                  <p className={styles.itemText}>{text}</p>
                  <button>
                    <ArrowRightr />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </Fragment>
      ))}
    </PageLayout>
  );
};

const MyPageInner = () => {
  const {
    data: {
      data: { nickname, email },
    },
  } = useSuspenseQuery(userQueryOption());

  return (
    <>
      <header className={styles.header}>
        <div>
          <h2 className={styles.name}>{nickname}</h2>
          <Spacer size={10} />
          <div className={styles.emailContainer}>
            <EmailIcon />
            <p className={styles.email}>{email}</p>
          </div>
        </div>
        <button>
          <ArrowRightr />
        </button>
      </header>
    </>
  );
};

//TODO 라우팅할 path 추가
const CONTENT_LIST = [
  {
    title: '서비스',
    listItemList: [{ text: '나의 상담 기록' }, { text: '내 약통 관리' }],
  },
  {
    title: '고객센터',
    listItemList: [
      { text: '공지사항' },
      { text: '이용약관' },
      { text: '1:1 카톡 채널 문의' },
    ],
  },
];
