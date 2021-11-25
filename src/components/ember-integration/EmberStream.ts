export interface IEmberStream<T> {
  subscribe(callback: (stream: IEmberStream<T>) => void): () => void;

  value(): T;

  setValue(value: T): void;
}

/**
 * Value wrapper solves data binding problem,
 * providing functionality to subscribe to value updates
 */
class EmberStream<T> implements IEmberStream<T> {
  private valueHolder?: T = undefined;

  private subscriptions = [] as ((stream: IEmberStream<T>) => void)[];

  constructor(value: T) {
    this.valueHolder = value;
  }

  /**
   * returns current value holding by wrapper
   */
  value(): T {
    return this.valueHolder!;
  }

  subscribe(callback: (stream: IEmberStream<T>) => void) {
    this.subscriptions.push(callback);
    return () => this.unsubscribe(callback);
  }

  unsubscribe(callback: (stream: IEmberStream<T>) => void) {
    this.subscriptions = this.subscriptions.filter((value) => value !== callback);
  }

  setValue(value: T) {
    this.valueHolder = value;
    this.subscriptions.forEach((subscription) => subscription(this));
  }
}

export default EmberStream;
