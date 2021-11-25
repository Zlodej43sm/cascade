import React from 'react';
import { Meta, Story } from '@storybook/react';

import { inviteDialogArguments } from '../__mocks__/InviteDialog.mock';
import InviteDialog, { InviteDialogProps } from '../InviteDialog';

export default {
  title: 'Dialogs/InviteDialog',
  component: InviteDialog,
} as Meta;

const Template: Story<InviteDialogProps> = (args) => (<InviteDialog {...args} />);

export const Default = Template.bind({});
Default.args = inviteDialogArguments;
