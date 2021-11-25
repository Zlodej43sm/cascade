import React from 'react';
import { Meta, Story } from '@storybook/react';

import { messageDialogArguments } from '../__mocks__/MessageDialog.mock';
import MessageDialog, { MessageDialogProps } from '../MessageDialog';

export default {
  title: 'Dialogs/MessageDialog',
  component: MessageDialog,
} as Meta;

const Template: Story<MessageDialogProps> = (args) => (<MessageDialog {...args} />);

export const Default = Template.bind({});
Default.args = messageDialogArguments;
