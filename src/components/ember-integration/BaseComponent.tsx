import React, { PureComponent } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import { IEmberStream } from './EmberStream';

/**
 * component for the react injection to Ember
 */

@observer
export default class BaseComponent<T> extends PureComponent<T> {
  protected unsubscribers = [] as (() => void)[];

  componentWillUnmount() {
    this.unsubscribers.forEach((unsubscriber) => unsubscriber());
  }

  @action
  protected initAndSubscribe<U>(prop: IEmberStream<U>, update: (value: U) => void) {
    const unsubscriber = prop.subscribe((stream) => update(stream.value()));
    this.unsubscribers.push(unsubscriber);
    update(prop.value());
  }

  render() {
    return <div />;
  }
}
