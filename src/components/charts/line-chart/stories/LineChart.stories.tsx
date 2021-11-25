import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ChartProps } from 'lib/components/charts/chart/Chart';
import { chartArguments } from '../__mocks__/LineChart.mock';
import LineChart from '../LineChart';

export default {
  title: 'Charts/LineChart',
  component: LineChart,
} as Meta;

const Template: Story<ChartProps> = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: chartArguments,
};
