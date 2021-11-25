import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextAreaField, { TextAreaFieldProps } from '../TextAreaField';

export default {
  title: 'Forms/TextAreaField',
  component: TextAreaField,
} as Meta;

const Template: Story<TextAreaFieldProps> = (args) => (<TextAreaField {...args} />);

export const Default = Template.bind({});
Default.args = {
  name: 'test-field',
  label: 'Label',
};
