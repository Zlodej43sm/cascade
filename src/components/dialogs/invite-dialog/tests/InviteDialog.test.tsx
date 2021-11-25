import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { inviteDialogArguments } from '../__mocks__/InviteDialog.mock';
import InviteDialog from '../InviteDialog';

describe('InviteDialog', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<InviteDialog {...inviteDialogArguments} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should call apply handler', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<InviteDialog {...inviteDialogArguments} onSubmit={onSubmit} />);
    fireEvent.click(getByTestId('button'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
