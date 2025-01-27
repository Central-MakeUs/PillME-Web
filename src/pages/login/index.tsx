import { useNavigate } from 'react-router';
import { ArrowLeft } from '../../assets';
import { AppBar } from '../../ui/app-bar';
import { ButtonText } from '../../ui/button-text';
import { PageLayout } from '../../ui/layout/page-layout';
import { LoginSection } from './loginSection';
import * as styles from './styles.css';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout header={<AppBar left={<ArrowLeft />} variant="page" />}>
      <div className={styles.container}>
        <div className={styles.title}>
          이메일과 비밀번호를
          <br /> 입력해주세요
        </div>

        <LoginSection />

        <div className={styles.buttonText}>
          <ButtonText onClick={() => navigate('/register')}>
            회원가입
          </ButtonText>
          <div>|</div>
          <ButtonText>계정찾기</ButtonText>
        </div>
      </div>
    </PageLayout>
  );
};
