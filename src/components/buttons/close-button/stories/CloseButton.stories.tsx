import React from 'react';
import { Meta, Story } from '@storybook/react';

import { closeButtonArguments } from '../__mocks__/CloseButton.mock';
import CloseButton, { CloseButtonProps } from '../CloseButton';

export default {
  title: 'Buttons/CloseButton',
  component: CloseButton,
} as Meta;

const Template: Story<CloseButtonProps> = (args) => (<CloseButton {...args} />);

export const Default = Template.bind({});
Default.args = closeButtonArguments;
