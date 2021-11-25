import React from 'react';
import { Meta, Story } from '@storybook/react';

import { cardArguments } from 'lib/components/card-wrapper/__mocks__/CardWrapper.mock';
import { CardWrapperProps } from 'lib/components/card-wrapper/CardWrapper';

import { chartArguments } from '../__mocks__/NumbersChart.mock';
import NumbersChartCard, { ChartProps, NumbersChart } from '../NumbersChart';

export default {
  title: 'Charts/NumbersChart',
  component: NumbersChart,
} as Meta;

const Template: Story<ChartProps> = (args) => <NumbersChart {...args} />;
const { defaultProps, growProps, growDownProps, differenceProps, differenceDownProps } = chartArguments;

const TemplateCard: Story<ChartProps & CardWrapperProps> = (args) => <NumbersChartCard {...args} />;
export const CardWrapperDifference = TemplateCard.bind({});
CardWrapperDifference.args = {
  ...differenceProps, ...cardArguments, height: 'auto', width: 420,
};

export const Default = Template.bind({});
Default.args = defaultProps;

export const Grow = Template.bind({});
Grow.args = growProps;

export const GrowDown = Template.bind({});
GrowDown.args = growDownProps;

export const Difference = Template.bind({});
Difference.args = differenceProps;

export const DifferenceDown = Template.bind({});
DifferenceDown.args = differenceDownProps;
