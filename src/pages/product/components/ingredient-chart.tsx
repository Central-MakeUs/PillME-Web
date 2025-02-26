import { useSuspenseQuery } from '@tanstack/react-query';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { productQueryOption } from '@/apis/query/product';

export const IngredientChart = ({ productId }: { productId: number }) => {
  const {
    data: { data: distribution },
  } = useSuspenseQuery(productQueryOption.distribution({ productId }));

  const createdChartData = (distribution: any) => {
    const missingCount = 5 - distribution.length; // 부족한 개수 계산
    const extraSpaces = Array.from({ length: missingCount }, (_, i) => ({
      ingredientName: ' '.repeat(i + 1), // 공백 개수 차이로 구분
      correctionAmount: 0,
      fullMark: 150,
    }));

    return [...distribution, ...extraSpaces];
  };

  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={createdChartData(distribution)}
      >
        <defs>
          <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(102, 144, 255, 1)" />
            <stop offset="33.5%" stopColor="rgba(51, 102, 255, 1)" />
            <stop offset="63%" stopColor="rgba(37, 78, 219, 1)" />
            <stop offset="100%" stopColor="rgba(16, 38, 147, 1)" />
          </linearGradient>
        </defs>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="ingredientName"
          tick={{
            fill: '#3366FF',
            fontFamily: 'Pretendard',
            fontWeight: '400',
            fontSize: 14,
          }}
        />
        <Radar
          dataKey="correctionAmount"
          stroke="#6666FF"
          fill="url(#gradientFill)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
