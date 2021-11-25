/* eslint-disable import/prefer-default-export, no-alert */
import { ButtonTypes, ButtonSizes } from '../Button';

export const buttonArguments = {
  defaultProps: {
    variant: ButtonTypes.Primary,
    children: `Button ${ButtonTypes.Primary}`,
    onClick: () => alert(`${ButtonTypes.Primary} button handler`),
  },
  defaultDisabledProps: {
    variant: ButtonTypes.Primary,
    disabled: true,
    children: `Button ${ButtonTypes.Primary}`,
    onClick: () => alert(`${ButtonTypes.Primary} button handler`),
  },
  defaultCompactProps: {
    variant: ButtonTypes.Primary,
    size: ButtonSizes.Compact,
    children: `Button ${ButtonTypes.Primary}`,
    onClick: () => alert(`${ButtonTypes.Primary} button handler`),
  },
  secondaryProps: {
    variant: ButtonTypes.Secondary,
    children: `Button ${ButtonTypes.Secondary}`,
    onClick: () => alert(`${ButtonTypes.Secondary} button handler`),
  },
  secondaryCompactProps: {
    variant: ButtonTypes.Secondary,
    size: ButtonSizes.Compact,
    children: `Button ${ButtonTypes.Secondary}`,
    onClick: () => alert(`${ButtonTypes.Secondary} button handler`),
  },
};
