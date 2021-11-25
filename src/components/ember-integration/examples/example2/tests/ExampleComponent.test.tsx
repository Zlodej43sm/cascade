import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import EmberStream from 'lib/components/ember-integration/EmberStream';
import EmberPropsWrapper from 'lib/components/ember-integration/EmberPropsWrapper';
import ExampleComponent, { MAGIC_NUMBER } from '../ExampleComponent';

const WrappedExampleComponent = EmberPropsWrapper(ExampleComponent);

describe('ExampleComponent unit tests', () => {
  const props = {
    name: new EmberStream('displayName-0'),
    data: new EmberStream({ Test: 1 }),
    callback: new EmberStream(jest.fn()),
  };

  it('Should match snapshot', () => {
    const { asFragment } = render(<WrappedExampleComponent {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should show contain name property', () => {
    const { getByTestId } = render(<WrappedExampleComponent {...props} />);

    expect(getByTestId('example-component').textContent).toContain(props.name.value());
  });

  it('Should update name property on changed', () => {
    const changedText = 'displayName-1';
    const { getByTestId } = render(<WrappedExampleComponent {...props} />);
    expect(getByTestId('example-component').textContent).not.toContain(changedText);

    props.name.setValue(changedText);
    expect(getByTestId('example-component').textContent).toContain(changedText);
  });

  it('Should call callback on button click', () => {
    const callbackMock = jest.fn();
    props.callback.setValue(callbackMock);
    const { getByText } = render(<WrappedExampleComponent {...props} />);
    expect(callbackMock).not.toBeCalled();

    fireEvent.click(getByText(/click me/i));

    expect(callbackMock).toBeCalled();
    expect(callbackMock).toBeCalledWith(MAGIC_NUMBER);
  });
});
