import { render } from '@testing-library/react';
import Highcharts from 'highcharts';

import { chartArguments } from '../__mocks__/PieChart.mock';
import PieChart from '../PieChart';

const chartImplementation = {
  reflow: jest.fn(),
  destroy: jest.fn(),
  update: jest.fn(),
};

jest.mock('highcharts', () => ({
  chart: jest.fn().mockImplementation(() => chartImplementation),
}));

describe('TableChart', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<PieChart highcharts={Highcharts} options={chartArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
