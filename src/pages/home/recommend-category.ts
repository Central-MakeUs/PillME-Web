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
};

export const RECOMMEND_CATEGORY_LIST: RecommendCategory[] = [
  { icon: IcImmunity_S, name: '면역 기능' },
  { icon: IcBloodpressure_S, name: '혈압' },
  { icon: IcBloodsugar_S, name: '혈당' },
  { icon: IcBloodfat_S, name: '헐중 지방' },
  { icon: IcBloodcirculation_S, name: '혈액 순환' },
  { icon: IcAnemia_S, name: '빈혈' },
  { icon: IcBone_S, name: '뼈 건강' },
  { icon: IcTooth_S, name: '치아&잇몸' },
];
