import React from 'react';

import Chart, { ChartProps } from 'lib/components/charts/chart/Chart';

function LineChart(props: ChartProps) {
  return (
    <Chart {...props} />
  );
}

export default LineChart;
