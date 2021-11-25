import React from 'react';

import CloseButton from 'lib/components/buttons/close-button/CloseButton';
import styles from './DialogWrapper.scss';

export type DialogWrapperProps = {
  title?: string
  children?: React.ReactNode
  width?: number | string
  height?: number | string
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

function DialogWrapper({ title, children, width, height, onClose }: DialogWrapperProps) {
  return (
    <section className={styles.container} style={{ width, height }} data-testid="dialog-wrapper-container">
      <header className={styles.header}>
        {title && (
          <div className={styles.title} data-testid="dialog-wrapper-title">
            {title}
          </div>
        )}
        <div className={styles.closeButton}>
          <CloseButton onClose={onClose} />
        </div>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default DialogWrapper;
