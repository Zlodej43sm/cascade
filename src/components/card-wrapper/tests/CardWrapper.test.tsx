import React from 'react';
import { render } from '@testing-library/react';

import { cardArguments } from '../__mocks__/CardWrapper.mock';
import CardWrapper from '../CardWrapper';

describe('CardWrapper', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<CardWrapper {...cardArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
