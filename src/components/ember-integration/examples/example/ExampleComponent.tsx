import { observable } from 'mobx';
import React from 'react';

import BaseComponent from '../../BaseComponent';
import { IEmberStream } from '../../EmberStream';

type Props = {
  name: IEmberStream<string>,
  data: IEmberStream<object>,
  callback: IEmberStream<(value: number) => void>
};

/**
 * component for the react injection PoC
 */
export default class ExampleComponent extends BaseComponent<Props> {
  static readonly MAGIC_NUMBER = 17;

  @observable
  private name: string = '';

  @observable
  private data: Object = {};

  @observable
  private callback?: (value: number) => void;

  constructor(props: Props) {
    super(props);
    this.initAndSubscribe(props.name, (value: string) => {
      this.name = value;
    });
    this.initAndSubscribe(props.data, (value: object) => {
      this.data = value;
    });
    this.initAndSubscribe(props.callback, (callbackValue: (value: number) => void) => {
      this.callback = callbackValue;
    });
  }

  render() {
    return (
      <div data-testid="example-component">
        {`Hello from React to ${this.name} and data is: ${this.data}!`}
        <button type="button" onClick={() => this.callback?.(ExampleComponent.MAGIC_NUMBER)}>Click me!</button>
      </div>
    );
  }
}
