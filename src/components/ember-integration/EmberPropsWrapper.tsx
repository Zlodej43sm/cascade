import React, { ComponentType, PureComponent } from 'react';

import EmberStream from './EmberStream';

type Props = Record<string, EmberStream<any>>;

/**
 * component for the react injection to Ember
 */
const EmberPropsWrapper = <T extends unknown>(Comp: ComponentType<T>) => class Wrapper extends PureComponent<Props, T> {
  protected unsubscribers = [] as (() => void)[];

  constructor(props: Props) {
    super(props);
    const state: any = {};

    Object.entries(props).forEach(([key, stream]) => {
      const unsubscriber = stream.subscribe((s) => this.setState({ [key]: s.value() } as any));
      this.unsubscribers.push(unsubscriber);
      state[key] = stream.value();
    });

    this.state = state;
  }

  componentWillUnmount() {
    this.unsubscribers.forEach((unsubscriber) => unsubscriber());
  }

  render() {
    return <Comp {...this.state} />;
  }
};

export default EmberPropsWrapper;
