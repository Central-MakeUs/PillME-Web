import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ConsultationEmpty } from '@/assets';
import { Button } from '@/ui/button';
import { Chip } from '@/ui/chip';
import { Dialog } from '@/ui/dialog';
import { useShowCustomToast } from '@/ui/toast/toast';
import { MOCK_DATA_LIST } from '../mock.consultation';
import * as styles from './my-consultation.css';

export interface Consultation {
  id: number;
  title: string;
  description: string;
  status: 'waiting' | 'in-progress' | 'completed';
}

interface Consultations {
  waiting: Consultation[];
  'in-progress': Consultation[];
  completed: Consultation[];
}

export const MyConsultation = () => {
  const [selectedChip, setSelectedChip] = useState<
    'waiting' | 'in-progress' | 'completed'
  >('waiting');
  const [consultations, setConsultations] = useState<Consultations>({
    waiting: [],
    'in-progress': [],
    completed: [],
  });
  const showCustomToast = useShowCustomToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConsultations = async () => {
      const categorizedData: Consultations = {
        waiting: MOCK_DATA_LIST.filter((item) => item.status === 'waiting'),
        'in-progress': MOCK_DATA_LIST.filter(
          (item) => item.status === 'in-progress',
        ),
        completed: MOCK_DATA_LIST.filter((item) => item.status === 'completed'),
      };

      setConsultations(categorizedData);
    };

    fetchConsultations();
  }, []);

  const chipData = [
    { label: '상담 대기', value: 'waiting' },
    { label: '상담 중', value: 'in-progress' },
    { label: '상담 종료', value: 'completed' },
  ];

  const renderContent = () => {
    return consultations[selectedChip].length > 0 ? (
      consultations[selectedChip].map((item) => (
        <div key={item.id} className={styles.cardContainer}>
          <div className={styles.cardTitle}>
            <span className={styles.cardQ}>Q.</span>
            {item.title}
          </div>
          <div className={styles.cardSubTitle}>
            2025.01.09 | 담당약사 최필미
          </div>
          {selectedChip === 'waiting' && (
            <Button
              disabled
              size="small"
              variant="primary"
              right={false}
              className={styles.cardButton}
            >
              답변예정
            </Button>
          )}
          {selectedChip === 'in-progress' && (
            <Button
              size="small"
              variant="primary"
              right={false}
              className={styles.cardButton}
              onClick={() => navigate(`/consultation/${item.id}`)}
            >
              답변 완료
            </Button>
          )}
          {selectedChip === 'completed' && (
            <Dialog
              action="default"
              title="내 약통에서 제거하시겠어요?"
              description="제거하면 다시 추가해야 합니다."
              leftButtonText="취소"
              rightButtonText="제거"
              onConfirm={() => {
                console.log('내역 삭제');
                showCustomToast('상담 내역이 삭제되었어요', 'remove');
              }}
              trigger={
                <Button
                  size="small"
                  variant="third"
                  left={false}
                  className={styles.cardButtonDelete}
                >
                  내역 삭제
                </Button>
              }
            />
          )}
        </div>
      ))
    ) : (
      <div className={styles.emptyContainer}>
        <ConsultationEmpty />
        <div className={styles.emptyTitle}>상담 내역이 없어요</div>
        <div className={styles.emptySubTitle}>
          상담 신청으로 궁금증을 해결해보세요
        </div>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.chipContainer}>
        {chipData.map((chip) => (
          <Chip
            key={chip.value}
            shape="pill"
            typography="body_2_14_sb"
            borderColor="grey200"
            className={styles.chipStyle}
            color={selectedChip === chip.value ? 'white' : 'grey900'}
            backgroundColor={selectedChip === chip.value ? 'grey800' : 'white'}
            onClick={() =>
              setSelectedChip(
                chip.value as 'waiting' | 'in-progress' | 'completed',
              )
            }
          >
            {chip.label}
          </Chip>
        ))}
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </section>
  );
};
