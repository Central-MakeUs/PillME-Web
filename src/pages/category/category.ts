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
      { icon: IcImmunity_L, name: '면역 기능', value: 'immunity' },
      { icon: IcBloodpressure_L, name: '혈압', value: 'bloodpressure' },
      { icon: IcBloodsugar_L, name: '혈당', value: 'bloodsugar' },
      { icon: IcBloodfat_L, name: '헐중 지방', value: 'bloodfat' },
      {
        icon: IcBloodcirculation_L,
        name: '혈액 순환',
        value: 'bloodcirculation',
      },
      { icon: IcAnemia_L, name: '빈혈', value: 'anemia' },
    ],
  },
  {
    title: '뼈, 치아 건강',
    subCategoryList: [
      { icon: IcBone_L, name: '뼈 건강', value: 'bone' },
      { icon: IcTooth_L, name: '치아&잇몸', value: 'tooth' },
    ],
  },
  {
    title: '뷰티 & 웰니스',
    subCategoryList: [
      { icon: IcSkin_L, name: '피부 건강', value: 'skin' },
      { icon: IcLosshair_L, name: '탈모&손톱', value: 'losshair' },
      { icon: IcAging_L, name: '노화', value: 'aging' },
      { icon: IcExercise_L, name: '운동', value: 'exercise' },
      { icon: IcBodyfat_L, name: '체지방', value: 'bodyfat' },
    ],
  },
  {
    title: '소화 및 내분비 건강',
    subCategoryList: [
      { icon: IcLiver_L, name: '간 건강', value: 'liver_L' },
      { icon: IcOrgan_L, name: '장 건강', value: 'organ_L' },
      { icon: IcThyroid_L, name: '갑상선', value: 'thyroid' },
    ],
  },
  {
    title: '신경 및 정신 건강',
    subCategoryList: [
      { icon: IcBrain_L, name: '두뇌', value: 'brain' },
      { icon: IcStress_L, name: '스트레스', value: 'stress' },
      { icon: IcTired_L, name: '피로감', value: 'tired' },
      { icon: IcEye_L, name: '눈건강', value: 'eye' },
    ],
  },
  {
    title: '생식 및 호흡 건강',
    subCategoryList: [
      { icon: IcFemale_L, name: '여성 건강', value: 'female' },
      { icon: IcMale_L, name: '남성 건강', value: 'male' },
      { icon: IcRespiratory_L, name: '호흡기', value: 'respiratory' },
      { icon: IcPregnancy_L, name: '임신', value: 'pregnancy' },
    ],
  },
] as const;
