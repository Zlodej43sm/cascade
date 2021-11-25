import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ChartProps } from 'lib/components/charts/chart/Chart';
import { chartArguments } from '../__mocks__/PieChart.mock';
import PieChart from '../PieChart';

export default {
  title: 'Charts/PieChart',
  component: PieChart,
} as Meta;

const Template: Story<ChartProps> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: chartArguments,
};
