import { ElementType } from 'react';
import {
  IcAging_L,
  IcAnemia_L,
  IcBloodcirculation_L,
  IcBloodfat_L,
  IcBloodpressure_L,
  IcBloodsugar_L,
  IcBodyfat_L,
  IcBone_L,
  IcBrain_L,
  IcExercise_L,
  IcEye_L,
  IcFemale_L,
  IcImmunity_L,
  IcLiver_L,
  IcLosshair_L,
  IcMale_L,
  IcOrgan_L,
  IcPregnancy_L,
  IcRespiratory_L,
  IcSkin_L,
  IcStress_L,
  IcThyroid_L,
  IcTired_L,
  IcTooth_L,
} from '@/assets';

export type CATEGORY_TYPE =
  | 'IMMUNE_CIRCULATION'
  | 'BONE_TEETH'
  | 'BEAUTY_WELLNESS'
  | 'DIGESTION_ENDOCRINE'
  | 'NEUROLOGICAL_MENTAL'
  | 'REPRODUCTIVE_RESPIRATORY';

export const CATEGORY_TITLE_MAP = {
  IMMUNE_CIRCULATION: '면역 및 순환 건강',
  BONE_TEETH: '뼈, 치아 건강',
  BEAUTY_WELLNESS: '뷰티 & 웰니스',
  DIGESTION_ENDOCRINE: '소화 및 내분비 건강',
  NEUROLOGICAL_MENTAL: '신경 및 정신 건강',
  REPRODUCTIVE_RESPIRATORY: '생식 및 호흡 건강',
  //   UNDEFINED: '기타',
} as const;

export type Category = {
  icon: ElementType;
  name: string;
  id: number;
  type: CATEGORY_TYPE;
  ingredentIdList: number[];
};

export type CategoryId = keyof typeof CATEGORY_LIST;

export const CATEGORY_LIST = {
  1: {
    icon: IcImmunity_L,
    name: '면역 기능',
    id: 1,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [1, 2, 3, 13, 17, 19, 31, 25],
  },
  2: {
    icon: IcBloodpressure_L,
    name: '혈압',
    id: 2,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [23, 15, 14, 25, 27],
  },
  3: {
    icon: IcBloodsugar_L,
    name: '혈당',
    id: 3,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [24],
  },
  4: {
    icon: IcBloodfat_L,
    name: '헐중 지방',
    id: 4,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [25, 27, 30],
  },
  5: {
    icon: IcBloodcirculation_L,
    name: '혈액 순환',
    id: 5,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [3, 25, 31],
  },
  6: {
    icon: IcAnemia_L,
    name: '빈혈',
    id: 6,
    type: 'IMMUNE_CIRCULATION',
    ingredentIdList: [16, 10, 12],
  },

  7: {
    icon: IcBone_L,
    name: '뼈 건강',
    id: 7,
    type: 'BONE_TEETH',
    ingredentIdList: [14, 2, 4, 15],
  },
  8: {
    icon: IcTooth_L,
    name: '치아&잇몸',
    id: 8,
    type: 'BONE_TEETH',
    ingredentIdList: [1, 2, 14, 16],
  },

  9: {
    icon: IcSkin_L,
    name: '피부 건강',
    id: 9,
    type: 'BEAUTY_WELLNESS',
    ingredentIdList: [1, 3, 13, 11, 33, 25],
  },
  10: {
    icon: IcLosshair_L,
    name: '탈모&손톱',
    id: 10,
    type: 'BEAUTY_WELLNESS',
    ingredentIdList: [11],
  },
  11: {
    icon: IcAging_L,
    name: '노화',
    id: 11,
    type: 'BEAUTY_WELLNESS',
    ingredentIdList: [3, 13, 19, 27],
  },
  12: {
    icon: IcExercise_L,
    name: '운동',
    id: 12,
    type: 'BEAUTY_WELLNESS',
    ingredentIdList: [32, 35],
  },
  13: {
    icon: IcBodyfat_L,
    name: '체지방',
    id: 13,
    type: 'BEAUTY_WELLNESS',
    ingredentIdList: [29, 30, 24],
  },

  14: {
    icon: IcLiver_L,
    name: '간 건강',
    id: 14,
    type: 'DIGESTION_ENDOCRINE',
    ingredentIdList: [19, 27],
  },
  15: {
    icon: IcOrgan_L,
    name: '장 건강',
    id: 15,
    type: 'DIGESTION_ENDOCRINE',
    ingredentIdList: [2, 15, 19],
  },
  16: {
    icon: IcThyroid_L,
    name: '갑상선',
    id: 16,
    type: 'DIGESTION_ENDOCRINE',
    ingredentIdList: [20, 19],
  },

  17: {
    icon: IcBrain_L,
    name: '두뇌',
    id: 17,
    type: 'NEUROLOGICAL_MENTAL',
    ingredentIdList: [25, 28],
  },
  18: {
    icon: IcStress_L,
    name: '스트레스',
    id: 18,
    type: 'NEUROLOGICAL_MENTAL',
    ingredentIdList: [15, 26],
  },
  19: {
    icon: IcTired_L,
    name: '피로감',
    id: 19,
    type: 'NEUROLOGICAL_MENTAL',
    ingredentIdList: [5, 6, 7, 8, 9, 12, 13, 15, 31, 32, 34],
  },
  20: {
    icon: IcEye_L,
    name: '눈건강',
    id: 20,
    type: 'NEUROLOGICAL_MENTAL',
    ingredentIdList: [1, 6, 13, 3, 28, 17, 18, 19, 25],
  },

  21: {
    icon: IcFemale_L,
    name: '여성건강',
    id: 21,
    type: 'REPRODUCTIVE_RESPIRATORY',
    ingredentIdList: [2, 10, 14, 16, 25],
  },
  22: {
    icon: IcMale_L,
    name: '남성 건강',
    id: 22,
    type: 'REPRODUCTIVE_RESPIRATORY',
    ingredentIdList: [17, 19],
  },
  23: {
    icon: IcRespiratory_L,
    name: '호흡기',
    id: 23,
    type: 'REPRODUCTIVE_RESPIRATORY',
    ingredentIdList: [13, 2],
  },
  24: {
    icon: IcPregnancy_L,
    name: '임신',
    id: 24,
    type: 'REPRODUCTIVE_RESPIRATORY',
    ingredentIdList: [2, 10, 16, 14, 25],
  },
} satisfies {
  [key: number]: Category;
};
