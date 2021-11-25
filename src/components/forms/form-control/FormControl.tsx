/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './FormControl.scss';

export type FormControlProps = {
  id?: string
  label?: string
  children?: React.ReactNode
};

function FormControl({ label, children }: FormControlProps) {
  return label ? (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      {children}
    </label>
  ) : (
    <>{children}</>
  );
}

export default FormControl;
