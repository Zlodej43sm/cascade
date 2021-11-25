import React from 'react';
import { render } from '@testing-library/react';

import FormControl from '../FormControl';

describe('FormControl', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<FormControl label="Label">children</FormControl>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should match snapshot without label', () => {
    const { asFragment } = render(<FormControl>children</FormControl>);
    expect(asFragment()).toMatchSnapshot();
  });
});
