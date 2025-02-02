import { ElementType } from 'react';
import {
  IcAnemia_S,
  IcBloodcirculation_S,
  IcBloodfat_S,
  IcBloodpressure_S,
  IcBloodsugar_S,
  IcBone_S,
  IcImmunity_S,
  IcTooth_S,
} from '../../assets';

type RecommendCategory = {
  icon: ElementType;
  name: string;
  value: string;
};

export const RECOMMEND_CATEGORY_LIST: RecommendCategory[] = [
  { icon: IcImmunity_S, name: '면역 기능', value: 'immunity' },
  { icon: IcBloodpressure_S, name: '혈압', value: 'bloodpressure' },
  { icon: IcBloodsugar_S, name: '혈당', value: 'bloodsugar' },
  { icon: IcBloodfat_S, name: '헐중 지방', value: 'bloodfat' },
  { icon: IcBloodcirculation_S, name: '혈액 순환', value: 'bloodcirculation' },
  { icon: IcAnemia_S, name: '빈혈', value: 'anemia' },
  { icon: IcBone_S, name: '뼈 건강', value: 'bone' },
  { icon: IcTooth_S, name: '치아&잇몸', value: 'tooth' },
];
