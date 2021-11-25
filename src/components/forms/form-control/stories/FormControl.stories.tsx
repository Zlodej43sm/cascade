import React from 'react';
import { Meta, Story } from '@storybook/react';

import FormControl, { FormControlProps } from '../FormControl';

export default {
  title: 'Forms/FormControl',
  component: FormControl,
} as Meta;

const Template: Story<FormControlProps> = (args) => (<FormControl {...args} />);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  children: 'children',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  children: 'children',
};
