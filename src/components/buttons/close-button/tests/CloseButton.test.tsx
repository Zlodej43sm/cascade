import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { closeButtonArguments } from '../__mocks__/CloseButton.mock';
import CloseButton from '../CloseButton';

describe('CloseButton', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<CloseButton {...closeButtonArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should call close handler', () => {
    const onClose = jest.fn();
    render(<CloseButton onClose={onClose} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(onClose).toHaveBeenCalled();
  });
});
