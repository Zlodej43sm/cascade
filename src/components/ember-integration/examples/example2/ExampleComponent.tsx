import React from 'react';

type Props = {
  name: string,
  data: object,
  callback: (value: number) => void
};

export const MAGIC_NUMBER = 17;

/**
 * component for the react injection PoC
 */
const ExampleComponent = ({ name, data, callback }: Props) => (
  <div data-testid="example-component">
    {`Hello from React to ${name} and data is: ${data}!`}
    <button type="button" onClick={() => callback?.(MAGIC_NUMBER)}>Click me!</button>
  </div>
);

export default ExampleComponent;
