import React from 'react';
import { Meta, Story } from '@storybook/react';

import { cardArguments } from '../__mocks__/CardWrapper.mock';
import CardWrapper, { CardWrapperProps } from '../CardWrapper';

export default {
  title: 'Card/CardWrapper',
  component: CardWrapper,
} as Meta;

const Template: Story<CardWrapperProps> = (args) => (<CardWrapper {...args} />);

export const Default = Template.bind({});
Default.args = cardArguments;
