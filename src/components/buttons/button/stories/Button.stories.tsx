import React from 'react';
import { Meta, Story } from '@storybook/react';

import { buttonArguments } from '../__mocks__/Button.mock';
import Button, { ButtonProps } from '../Button';

export default {
  title: 'Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (<Button {...args} />);

export const Default = Template.bind({});
Default.args = buttonArguments.defaultProps;

export const DefaultCompact = Template.bind({});
DefaultCompact.args = buttonArguments.defaultCompactProps;

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = buttonArguments.defaultDisabledProps;

export const Secondary = Template.bind({});
Secondary.args = buttonArguments.secondaryProps;

export const SecondaryCompact = Template.bind({});
SecondaryCompact.args = buttonArguments.secondaryCompactProps;
