import React from 'react';
import clsx from 'clsx';

import styles from './TextArea.scss';

export type TextAreaProps = Pick<React.HTMLProps<HTMLTextAreaElement>, 'id' | 'name' | 'value' | 'placeholder' | 'className' | 'onChange' | 'onBlur'>;

function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea className={clsx(styles.input, className)} {...rest} />
  );
}

export default TextArea;
