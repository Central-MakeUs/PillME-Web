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

export const CATEGORY_LIST = [
  {
    title: '면역 및 순환 건강',
    subCategoryList: [
      { icon: IcImmunity_L, name: '면역 기능', value: 1 },
      { icon: IcBloodpressure_L, name: '혈압', value: 2 },
      { icon: IcBloodsugar_L, name: '혈당', value: 3 },
      { icon: IcBloodfat_L, name: '헐중 지방', value: 4 },
      {
        icon: IcBloodcirculation_L,
        name: '혈액 순환',
        value: 5,
      },
      { icon: IcAnemia_L, name: '빈혈', value: 6 },
    ],
  },
  {
    title: '뼈, 치아 건강',
    subCategoryList: [
      { icon: IcBone_L, name: '뼈 건강', value: 7 },
      { icon: IcTooth_L, name: '치아&잇몸', value: 8 },
    ],
  },
  {
    title: '뷰티 & 웰니스',
    subCategoryList: [
      { icon: IcSkin_L, name: '피부 건강', value: 9 },
      { icon: IcLosshair_L, name: '탈모&손톱', value: 10 },
      { icon: IcAging_L, name: '노화', value: 11 },
      { icon: IcExercise_L, name: '운동', value: 12 },
      { icon: IcBodyfat_L, name: '체지방', value: 13 },
    ],
  },
  {
    title: '소화 및 내분비 건강',
    subCategoryList: [
      { icon: IcLiver_L, name: '간 건강', value: 14 },
      { icon: IcOrgan_L, name: '장 건강', value: 15 },
      { icon: IcThyroid_L, name: '갑상선', value: 16 },
    ],
  },
  {
    title: '신경 및 정신 건강',
    subCategoryList: [
      { icon: IcBrain_L, name: '두뇌', value: 17 },
      { icon: IcStress_L, name: '스트레스', value: 18 },
      { icon: IcTired_L, name: '피로감', value: 19 },
      { icon: IcEye_L, name: '눈건강', value: 20 },
    ],
  },
  {
    title: '생식 및 호흡 건강',
    subCategoryList: [
      { icon: IcFemale_L, name: '여성 건강', value: 21 },
      { icon: IcMale_L, name: '남성 건강', value: 22 },
      { icon: IcRespiratory_L, name: '호흡기', value: 23 },
      { icon: IcPregnancy_L, name: '임신', value: 24 },
    ],
  },
] as const;
