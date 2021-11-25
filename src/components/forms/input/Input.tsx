import React from 'react';
import clsx from 'clsx';

import styles from './Input.scss';

export type InputProps = Pick<React.HTMLProps<HTMLInputElement>, 'id' | 'name' | 'value' | 'placeholder' | 'className' | 'onChange' | 'onBlur'>;

function Input({ className, ...rest }: InputProps) {
  return (
    <input className={clsx(styles.input, className)} {...rest} />
  );
}

export default Input;
