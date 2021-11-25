import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ChartProps } from 'lib/components/charts/chart/Chart';
import { chartArguments } from '../__mocks__/BarChart.mock';
import BarChart from '../BarChart';

export default {
  title: 'Charts/BarChart',
  component: BarChart,
} as Meta;

const Template: Story<ChartProps> = (args) => <BarChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: chartArguments,
};
