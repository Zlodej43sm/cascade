import React from 'react';
import clsx from 'clsx';

import CardWrapper, { CardWrapperProps } from 'lib/components/card-wrapper/CardWrapper';

import styles from './NumberChart.scss';

export enum ChartTypes {
  Default = 'default',
  Grow = 'grow',
  Comparison = 'comparison',
}

export enum GrowTypes {
  Up = 'up',
  Down = 'down',
}

export type ChartProps = {
  value: string
  difference?: string
  unit?: string
  grow?: GrowTypes
  type?: ChartTypes
};

export function NumbersChart({
  value,
  difference,
  unit = '',
  type = ChartTypes.Default,
  grow = GrowTypes.Up,
}: ChartProps) {
  const containerClass = clsx(styles.container, styles[type], styles[grow]);
  const isComparison = type === ChartTypes.Comparison;
  return (
    <div className={containerClass} data-testid="number-chart">
      <span className={styles.value} data-testid="value">
        {unit}
        {value}
      </span>
      {isComparison && (
        <span className={styles.difference} data-testid="comparison-value">
            {difference}
        </span>
      )}
    </div>
  );
}

// solution for Ember usage
function NumbersChartCard(props: CardWrapperProps & ChartProps) {
  const {
    icon, title, subTitle, width, height, ...rest
  } = props;
  return (
    <CardWrapper {...{
      icon, title, subTitle, width, height,
    }}
    >
      <NumbersChart {...rest} />
    </CardWrapper>
  );
}

export default NumbersChartCard;
