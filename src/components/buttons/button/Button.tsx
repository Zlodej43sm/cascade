import React from 'react';
import clsx from 'clsx';

import styles from './Button.scss';

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonSizes {
  Default = 'default',
  Compact = 'compact',
}

export type ButtonProps = Pick<React.ComponentProps<'button'>, 'type' | 'disabled' | 'onClick' | 'children'> & {
  variant?: ButtonTypes
  size?: ButtonSizes
};

function Button({
  children,
  type = 'button',
  variant = ButtonTypes.Primary,
  disabled = false,
  size = ButtonSizes.Default,
  onClick,
}: ButtonProps) {
  const className = clsx(styles.button, styles[variant], styles[size]);
  return (
    <button className={className} onClick={onClick} type={type} data-testid="button" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
