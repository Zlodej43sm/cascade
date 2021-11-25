import React from 'react';

import styles from './CardWrapper.scss';

export type CardWrapperProps = {
  icon?: React.ReactNode
  title?: string
  subTitle?: string
  children?: React.ReactNode
  width?: number | string
  height?: number | string
};

function CardWrapper({ icon, title, subTitle, children, width, height }: CardWrapperProps) {
  return (
    <section className={styles.container} style={{ width, height }} data-testid="card-wrapper-container">
      <header className={styles.header}>
        {icon && (
          <div className={styles.icon} data-testid="card-wrapper-icon">
            <span>{icon}</span>
          </div>
        )}
        <div>
          {title && (
            <div className={styles.title} data-testid="card-wrapper-title">
              {title}
            </div>
          )}
          {subTitle && (
            <div className={styles.subTitle} data-testid="card-wrapper-subtitle">
              {subTitle}
            </div>
          )}
        </div>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}

export default CardWrapper;
