import React from 'react';
import { render, screen } from '@testing-library/react';
import Highcharts from 'highcharts';

import ErrorMessage from '../ErrorMessage';
import { chartArguments } from '../../bar-chart/__mocks__/BarChart.mock';
import Chart from '../Chart';

const chartImplementation = {
  reflow: jest.fn(),
  destroy: jest.fn(),
};
jest.mock('highcharts', () => ({
  chart: jest.fn().mockImplementation(() => chartImplementation),
}));

describe('Chart', () => {
  const props = { highcharts: Highcharts, options: chartArguments };
  const size = {
    width: 100,
    height: 30,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should match snapshot', () => {
    const { asFragment } = render(<Chart {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should throw an error on "highcharts" props not defined', () => {
    expect(() => {
      render(<Chart options={chartArguments} />);
    }).toThrow(ErrorMessage.HIGHCHARTS_NOT_DEFINED);
  });

  it('Should throw an error on "options" props not defined', () => {
    expect(() => {
      render(<Chart highcharts={Highcharts} options={null} />);
    }).toThrow(ErrorMessage.OPTIONS_NOT_DEFINED);
  });

  it('Should update component on props changed', () => {
    const { rerender } = render(<Chart {...props} />);
    const newOptions = {};
    rerender(<Chart highcharts={Highcharts} options={newOptions} width={size.width} height={size.height} />);
    expect(chartImplementation.reflow).toHaveBeenCalled();
    expect(screen.getByTestId('chart-wrapper')).toHaveStyle(`width: ${size.width}px;height: ${size.height}px`);
  });

  it('Should reflow component on "width" props changed & destroy on unmount', () => {
    const { rerender } = render(<Chart {...props} />);
    rerender(<Chart {...props} width={size.width} />);
    expect(chartImplementation.reflow).toHaveBeenCalled();
  });
});
