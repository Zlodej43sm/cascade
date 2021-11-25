import React from 'react';
import { Meta, Story } from '@storybook/react';

import { dialogWrapperArguments } from '../__mocks__/DialogWrapper.mock';
import DialogWrapper, { DialogWrapperProps } from '../DialogWrapper';

export default {
  title: 'Dialogs/DialogWrapper',
  component: DialogWrapper,
} as Meta;

const Template: Story<DialogWrapperProps> = (args) => (<DialogWrapper {...args} />);

export const Default = Template.bind({});
Default.args = dialogWrapperArguments;
