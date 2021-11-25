import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ChartProps } from 'lib/components/charts/chart/Chart';
import { chartArguments } from '../__mocks__/BubbleChart.mock';
import BubbleChart from '../BubbleChart';

export default {
  title: 'Charts/BubbleChart',
  component: BubbleChart,
} as Meta;

const Template: Story<ChartProps> = (args) => <BubbleChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: chartArguments,
};
