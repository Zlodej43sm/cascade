import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { messageDialogArguments } from '../__mocks__/MessageDialog.mock';
import MessageDialog from '../MessageDialog';

describe('MessageDialog', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<MessageDialog {...messageDialogArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should call apply handler', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<MessageDialog {...messageDialogArguments} onSubmit={onSubmit} />);
    fireEvent.click(getByTestId('button'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
