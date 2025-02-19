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
  { icon: IcImmunity_S, name: '면역 기능', value: 'immunity' },
  { icon: IcBloodpressure_S, name: '혈압', value: 'bloodpressure' },
  { icon: IcBloodsugar_S, name: '혈당', value: 'bloodsugar' },
  { icon: IcBloodfat_S, name: '헐중 지방', value: 'bloodfat' },
  { icon: IcBloodcirculation_S, name: '혈액 순환', value: 'bloodcirculation' },
  { icon: IcAnemia_S, name: '빈혈', value: 'anemia' },
  { icon: IcBone_S, name: '뼈 건강', value: 'bone' },
];

export const secondCategoryList = [
  { icon: IcTooth_S, name: '치아&잇몸', value: 'tooth' },
  { icon: IcSkin_S, name: '피부 건강', value: 'skin' },
  { icon: IcLosshair_S, name: '탈모&손톱', value: 'losshair' },
  { icon: IcAging_S, name: '노화', value: 'aging' },
  { icon: IcExercise_S, name: '운동', value: 'exercise' },
  { icon: IcBodyfat_S, name: '체지방', value: 'bodyfat' },
  { icon: IcLiver_S, name: '간 건강', value: 'liver_L' },
  { icon: IcOrgan_S, name: '장 건강', value: 'organ_L' },
];

export const thirdCategoryList = [
  { icon: IcThyroid_S, name: '갑상선', value: 'thyroid' },
  { icon: IcBrain_S, name: '두뇌', value: 'brain' },
  { icon: IcStress_S, name: '스트레스', value: 'stress' },
  { icon: IcTired_S, name: '피로감', value: 'tired' },
  { icon: IcEye_S, name: '눈건강', value: 'eye' },
  { icon: IcFemale_S, name: '여성 건강', value: 'female' },
  { icon: IcMale_S, name: '남성 건강', value: 'male' },
  { icon: IcRespiratory_S, name: '호흡기', value: 'respiratory' },
];

export const fourthCategoryList: HomeRecommendCategory[] = [
  { icon: IcPregnancy_S, name: '임신', value: 'pregnancy' },
];
