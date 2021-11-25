import { render } from '@testing-library/react';

import { cardArguments } from 'lib/components/card-wrapper/__mocks__/CardWrapper.mock';
import { chartArguments, randomColorArguments } from '../__mocks__/TableChart.mock';
import TableChartCard, { TableChart } from '../TableChart';

describe('TableChart', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<TableChart {...chartArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot with getColors', () => {
    const { asFragment } = render(<TableChart {...randomColorArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot for TableChartCard', () => {
    const { icon, title, subTitle } = cardArguments;
    const { asFragment } = render(<TableChartCard {...{ ...chartArguments, icon, title, subTitle }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
