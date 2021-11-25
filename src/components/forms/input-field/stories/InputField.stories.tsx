import React from 'react';
import { Meta, Story } from '@storybook/react';

import InputField, { InputFieldProps } from '../InputField';

export default {
  title: 'Forms/InputField',
  component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = (args) => (<InputField {...args} />);

export const Default = Template.bind({});
Default.args = {
  name: 'test-field',
  label: 'Label',
};
