import React from 'react';
import { Meta, Story } from '@storybook/react';

import { cardArguments } from 'lib/components/card-wrapper/__mocks__/CardWrapper.mock';
import { CardWrapperProps } from 'lib/components/card-wrapper/CardWrapper';

import { chartArguments, randomColorArguments } from '../__mocks__/TableChart.mock';
import TableChartCard, { TableChart, TableChartProps } from '../TableChart';

export default {
  title: 'Charts/TableChart',
  component: TableChart,
  argTypes: {
    getColors: {
      table: {
        disable: true,
      },
    },
  },

} as Meta;

const Template: Story<TableChartProps> = (args) => <TableChart {...args} />;

const TemplateCard: Story<TableChartProps & CardWrapperProps> = (args) => <TableChartCard {...args} />;

export const Default = Template.bind({});
Default.args = chartArguments;

export const WithWrapper = TemplateCard.bind({});
WithWrapper.args = { ...chartArguments, ...cardArguments };

export const RandomColors = Template.bind({});
RandomColors.args = randomColorArguments;
