import { ElementType } from 'react';
import {
  IcAging_S,
  IcAnemia_S,
  IcBloodcirculation_S,
  IcBloodfat_S,
  IcBloodpressure_S,
  IcBloodsugar_S,
  IcBodyfat_S,
  IcBone_S,
  IcBrain_S,
  IcExercise_S,
  IcEye_S,
  IcFemale_S,
  IcImmunity_S,
  IcLiver_S,
  IcLosshair_S,
  IcMale_S,
  IcOrgan_S,
  IcPregnancy_S,
  IcRespiratory_S,
  IcSkin_S,
  IcStress_S,
  IcThyroid_S,
  IcTired_S,
  IcTooth_S,
} from '@/assets';

export type HomeRecommendCategory = {
  icon: ElementType;
  name: string;
  value: string;
};

export const firstCategortyList = [
  { icon: IcImmunity_S, name: '면역 기능', value: '1' },
  { icon: IcBloodpressure_S, name: '혈압', value: '2' },
  { icon: IcBloodsugar_S, name: '혈당', value: '3' },
  { icon: IcBloodfat_S, name: '헐중 지방', value: '4' },
  { icon: IcBloodcirculation_S, name: '혈액 순환', value: '5' },
  { icon: IcAnemia_S, name: '빈혈', value: '6' },
  { icon: IcBone_S, name: '뼈 건강', value: '7' },
  { icon: IcTooth_S, name: '치아&잇몸', value: '8' },
];

export const secondCategoryList = [
  { icon: IcSkin_S, name: '피부 건강', value: '9' },
  { icon: IcLosshair_S, name: '탈모&손톱', value: '10' },
  { icon: IcAging_S, name: '노화', value: '11' },
  { icon: IcExercise_S, name: '운동', value: '12' },
  { icon: IcBodyfat_S, name: '체지방', value: '13' },
  { icon: IcLiver_S, name: '간 건강', value: '14' },
  { icon: IcOrgan_S, name: '장 건강', value: '15' },
  { icon: IcThyroid_S, name: '갑상선', value: '16' },
];

export const thirdCategoryList = [
  { icon: IcBrain_S, name: '두뇌', value: '17' },
  { icon: IcStress_S, name: '스트레스', value: '18' },
  { icon: IcTired_S, name: '피로감', value: '19' },
  { icon: IcEye_S, name: '눈건강', value: '20' },
  { icon: IcFemale_S, name: '여성 건강', value: '21' },
  { icon: IcMale_S, name: '남성 건강', value: '22' },
  { icon: IcRespiratory_S, name: '호흡기', value: '23' },
  { icon: IcPregnancy_S, name: '임신', value: '24' },
];
