import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { buttonArguments } from '../__mocks__/Button.mock';
import Button, { ButtonSizes } from '../Button';

describe('Button', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<Button {...buttonArguments.defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should call click handler', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>No extra props</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalled();
  });
  it('Should NOT handle click on button disabled', () => {
    const onClick = jest.fn();
    render(<Button {...buttonArguments.defaultDisabledProps} onClick={onClick} />);
    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
  it('Should have compact class', () => {
    const { getByTestId } = render(<Button {...buttonArguments.defaultCompactProps} />);
    expect(getByTestId('button')).toHaveClass(ButtonSizes.Compact);
  });
  it('Should have type - submit', () => {
    const submitType = 'submit';
    const { getByTestId } = render(<Button type={submitType} {...buttonArguments.defaultProps} />);
    expect(getByTestId('button')).toHaveAttribute('type', submitType);
  });
});
