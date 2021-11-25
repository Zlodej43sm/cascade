import React from 'react';

import Chart, { ChartProps } from 'lib/components/charts/chart/Chart';

function BarChart(props: ChartProps) {
  return (
    <Chart {...props} />
  );
}

export default BarChart;
