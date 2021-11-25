import React from 'react';
import { render } from '@testing-library/react';

import { dialogWrapperArguments } from '../__mocks__/DialogWrapper.mock';
import DialogWrapper from '../DialogWrapper';

describe('CardWrapper', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<DialogWrapper {...dialogWrapperArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
