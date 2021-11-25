import React from 'react';

import styles from './CloseButton.scss';

export type CloseButtonProps = {
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClose}
      type="button"
      aria-label="Close"
      data-testid="close-button"
    />
  );
}

export default CloseButton;
