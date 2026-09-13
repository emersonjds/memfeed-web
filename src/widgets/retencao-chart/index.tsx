'use client';

import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type RetencaoChartProps = {
  readonly d1: number | null;
  readonly d7: number;
  readonly d30: number;
};

const options: ApexOptions = {
  chart: { type: 'line', height: 260, toolbar: { show: false }, fontFamily: 'var(--font-sans)' },
  colors: ['#10b981'],
  stroke: { curve: 'straight', width: 3 },
  markers: { size: 5, strokeColors: '#ffffff', strokeWidth: 2 },
  grid: { yaxis: { lines: { show: true } }, xaxis: { lines: { show: false } } },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['D+1', 'D+7', 'D+30'],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { min: 0, max: 100, labels: { formatter: (value) => `${value}%` } },
  tooltip: { y: { formatter: (value) => `${value}%` } },
};

export const RetencaoChart = ({ d1, d7, d30 }: RetencaoChartProps) => {
  const series = [{ name: 'Retenção', data: [d1, d7, d30] }];

  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
      <h3 className="text-base font-bold text-ink">Queda de retenção ao longo do tempo</h3>
      <p className="mt-1 text-sm text-ink-muted">
        D+1 é o acerto médio no dia da aula; D+7 e D+30 são o que sobrou depois.
      </p>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[280px]">
          <Chart options={options} series={series} type="line" height={260} />
        </div>
      </div>
    </div>
  );
};
