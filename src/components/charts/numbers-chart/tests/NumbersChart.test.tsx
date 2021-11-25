import React from 'react';
import clsx from 'clsx';
import { render } from '@testing-library/react';

import { cardArguments } from 'lib/components/card-wrapper/__mocks__/CardWrapper.mock';
import { chartArguments } from '../__mocks__/NumbersChart.mock';
import NumbersChartCard, { NumbersChart } from '../NumbersChart';
import styles from '../NumbersChart.scss';

describe('NumbersChart', () => {
  const { defaultProps, growProps, growDownProps, differenceProps } = chartArguments;

  it('Should match snapshot NumbersChart', () => {
    const { asFragment } = render(<NumbersChart {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot for NumbersChartCard', () => {
    const { icon, title, subTitle } = cardArguments;
    const { asFragment } = render(<NumbersChartCard {...{
      ...defaultProps, icon, title, subTitle,
    }}
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render default type chart when type is not defined', () => {
    const expectedContainerClassName = clsx(styles.container, styles[growProps.grow]);
    const notDefinedTypeProps = { ...defaultProps, type: undefined };
    const { getByTestId } = render(<NumbersChart {...notDefinedTypeProps} />);
    expect(getByTestId('number-chart')).toHaveClass(expectedContainerClassName);
  });

  it('Should render grow down type chart', () => {
    const expectedContainerClassName = clsx(styles.container, styles[growDownProps.type], styles[growDownProps.grow]);
    const { getByTestId } = render(<NumbersChart {...growDownProps} />);
    expect(getByTestId('number-chart')).toHaveClass(expectedContainerClassName);
  });

  it('Should render comparison type chart', () => {
    const { getByTestId } = render(<NumbersChart {...differenceProps} />);
    expect(getByTestId('comparison-value')).toBeDefined();
  });
});
