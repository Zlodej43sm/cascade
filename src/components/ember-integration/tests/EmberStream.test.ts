import EmberStream from 'lib/components/ember-integration/EmberStream';

describe('EmberStream unit tests', () => {
  const NAME_VALUE = 'displayName-1';
  const DATA_VALUE = { test: 1 };
  const NAME_VALUE_2 = 'displayName-2';
  const DATA_VALUE_2 = { test: 2 };

  it('Constructor should return value wrapper', () => {
    const name = new EmberStream(NAME_VALUE);
    const data = new EmberStream(DATA_VALUE);

    expect(name).not.toBeNull();
    expect(data).not.toBeNull();
  });

  it('Should return value', () => {
    const name = new EmberStream(NAME_VALUE);
    const data = new EmberStream(DATA_VALUE);

    expect(name.value()).toBe(NAME_VALUE);
    expect(data.value()).toBe(DATA_VALUE);
  });

  it('Should return correct value after update', () => {
    const name = new EmberStream(NAME_VALUE);
    const data = new EmberStream(DATA_VALUE);
    name.setValue(NAME_VALUE_2);
    data.setValue(DATA_VALUE_2);

    expect(name.value()).toBe(NAME_VALUE_2);
    expect(data.value()).toBe(DATA_VALUE_2);
  });

  it('Should return unsubscriber', () => {
    const name = new EmberStream(NAME_VALUE);
    const updateHandler = jest.fn();
    const unsubscriber = name.subscribe(updateHandler);
    expect(unsubscriber).not.toBeNull();
  });

  it('Should call updateHandler on update', () => {
    const name = new EmberStream(NAME_VALUE);
    const updateHandler = jest.fn();
    name.subscribe(updateHandler);
    name.setValue(NAME_VALUE_2);
    expect(updateHandler).toBeCalledWith(name);
    expect(updateHandler.mock.calls[0][0].value()).toEqual(NAME_VALUE_2);
    name.setValue(NAME_VALUE);
    expect(updateHandler.mock.calls[1][0].value()).toEqual(NAME_VALUE);
    expect(updateHandler).toBeCalledTimes(2);
  });

  it('Should not call updateHandler on update after unsubscribing', () => {
    const name = new EmberStream(NAME_VALUE);
    const updateHandler = jest.fn();
    const unsubscribeFn = name.subscribe(updateHandler);
    name.setValue(NAME_VALUE_2);
    expect(updateHandler.mock.calls[0][0].value()).toEqual(NAME_VALUE_2);
    expect(updateHandler).toBeCalledTimes(1);
    unsubscribeFn();
    name.setValue(NAME_VALUE);
    expect(updateHandler).toBeCalledTimes(1);
  });

  it.skip('Should be safe to call unsubscribe() with not added callback', () => {
    // TODO
  });
});
