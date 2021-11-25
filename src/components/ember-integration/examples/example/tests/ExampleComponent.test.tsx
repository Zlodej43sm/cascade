import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import EmberStream from 'lib/components/ember-integration/EmberStream';

import ExampleComponent from '../ExampleComponent';

describe('ExampleComponent unit tests', () => {
  const props = {
    name: new EmberStream('displayName-0'),
    data: new EmberStream({}),
    callback: new EmberStream(jest.fn()),
  };

  it('Should match snapshot', () => {
    const { asFragment } = render(<ExampleComponent {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should show contain name property', () => {
    const propName = props.name.value();
    const { getByText } = render(<ExampleComponent {...props} />);
    expect(getByText(propName, { exact: false })).toBeDefined();
  });

  it.skip('Should update name property on changed', async () => {
    const newPropName = 'displayName-1';
    render(<ExampleComponent {...props} />);
    screen.getByTestId('example-component');
    await waitFor(() => props.name.setValue(newPropName));
    expect(screen.getByText(newPropName, { exact: false })).toBeDefined();
  });

  it('Should call callback on button click', () => {
    const callbackMock = jest.fn();
    props.callback.setValue(callbackMock);
    const { getByText } = render(<ExampleComponent {...props} />);
    expect(callbackMock).not.toBeCalled();

    fireEvent.click(getByText(/click me/i));

    expect(callbackMock).toBeCalled();
    expect(callbackMock).toBeCalledWith(ExampleComponent.MAGIC_NUMBER);
  });
});
