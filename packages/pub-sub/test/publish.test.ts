import { subscribe, publish, unsubscribe, clearAllSubscriptions } from '../src/index';

describe('测试 publish 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });

  test('没有订阅相应的消息，执行 publish 应该返回false', () => {
    expect(publish('say')).toBe(false);
  });

  test('订阅了相应的消息，执行 publish 应该返回true', () => {
    subscribe('say', () => {});
    expect(publish('say')).toBe(true);
  });

  test('订阅了相应的消息，之后又取消订阅，应该返回false', () => {
    const token = subscribe('say', () => {});
    unsubscribe(token);
    expect(publish('say')).toBe(false);
  });

  test('订阅同一个消息的所有回调，执行 publish 后都应该调用一次', () => {
    const name = 'say';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    subscribe(name, fn1);
    subscribe(name, fn2);
    publish(name, 'message');
    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(1);
  });

  test('执行 publish 后，只有相应的订阅的回调才应该被调用', () => {
    const name1 = 'say';
    const name2 = 'say1';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    subscribe(name1, fn1);
    subscribe(name2, fn2);
    publish(name1, 'message');
    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(0);
  });

  test('执行 publish 后，订阅的 name 和 数据 应该作为回调的参数', () => {
    const name = 'say';
    const fn = jest.fn();
    const data = 'message';
    subscribe(name, fn);
    publish(name, data);
    expect(fn).toBeCalledWith(name, data);
  });

  test('当第一个参数是token, 并且存在对应的callback, 执行之后应该返回true', () => {
    const token = subscribe('say', () => {});
    expect(publish(token)).toBe(true);
  });

  test('当第一个参数是token, 并且不存在对应的callback, 执行之后应该返回false', () => {
    const token = subscribe('say', () => {});
    unsubscribe(token);
    expect(publish(token)).toBe(false);
  });

  test('当第一个参数是token, 并且存在对应的callback, 订阅的 name 和 数据 应该作为回调的参数', () => {
    const fn = jest.fn();
    const name = 'say';
    const data = 'message';
    const token = subscribe(name, fn);
    publish(token, data);
    expect(fn).toBeCalledWith(name, data);
  });
});
