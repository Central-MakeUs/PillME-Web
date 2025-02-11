import { Consultation } from './components/my-consultation';

export const MOCK_DATA_LIST: Consultation[] = [
  {
    id: 1,
    title: '상담 요청 1',
    description: '상담 대기 중입니다.',
    status: 'waiting',
  },
  {
    id: 2,
    title: '상담 요청 2',
    description: '상담 진행 중입니다.',
    status: 'in-progress',
  },
  {
    id: 3,
    title: '상담 요청 3',
    description: '상담이 완료되었습니다.',
    status: 'completed',
  },
  {
    id: 4,
    title: '상담 요청 4',
    description: '대기 중인 추가 상담입니다.',
    status: 'waiting',
  },
];
