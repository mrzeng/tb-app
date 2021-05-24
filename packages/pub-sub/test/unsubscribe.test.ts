import { subscribe, unsubscribe, clearAllSubscriptions, publish } from '../src/index';

describe('测试 unsubscribe 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });

  test('当取消没有订阅的消息，应该返回 false', () => {
    expect(unsubscribe('say')).toBe(false);
    expect(unsubscribe(() => {})).toBe(false);
  });

  test('参数是消息名称，取消订阅成功，应该返回 true', () => {
    const name = 'say';
    subscribe(name, () => {});
    expect(unsubscribe(name)).toBe(true);
  });

  test('参数是消息名称，取消订阅成功, 执行 publish, 应该不会触发之前的订阅回调', () => {
    const name = 'say';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    subscribe(name, fn1);
    subscribe(name, fn2);
    expect(unsubscribe(name)).toBe(true);
    expect(publish(name, 'message')).toBe(false);
    expect(fn1).not.toBeCalled();
    expect(fn2).not.toBeCalled();
  });

  test('参数是消息名称，取消订阅成功，应该不能影响其他订阅的消息', () => {
    const name1 = 'say1';
    const name2 = 'say2';
    const data = 'message';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    subscribe(name1, fn1);
    subscribe(name2, fn2);
    unsubscribe(name1);
    publish(name2, data);
    expect(fn2).toBeCalled();
  });

  test('参数是消息名称，取消订阅失败，应该返回 false', () => {
    const name = 'say';
    subscribe(name, () => {});
    expect(unsubscribe('say-no')).toBe(false);
  });

  test('参数是函数，取消订阅成功，应该返回 true', () => {
    const name = 'say';
    const callback = () => {};
    subscribe(name, callback);
    expect(unsubscribe(callback)).toBe(true);
  });

  test('参数是函数，取消订阅成功，执行 publish, 应该不会触发之前的订阅回调', () => {
    const name1 = 'say1';
    const name2 = 'say2';
    const name3 = 'say3';
    const fn = jest.fn();
    subscribe(name1, fn);
    subscribe(name2, fn);
    subscribe(name3, fn);
    expect(unsubscribe(fn)).toBe(true);
    expect(publish(name1)).toBe(false);
    expect(publish(name2)).toBe(false);
    expect(publish(name3)).toBe(false);
    expect(fn).not.toBeCalled();
  });

  test('参数是函数，取消订阅失败，应该返回 false', () => {
    const name = 'say';
    subscribe(name, () => {});
    expect(unsubscribe(() => {})).toBe(false);
  });

  test('参数是token，取消订阅成功，应该返回 true', () => {
    const name = 'say';
    const callback = () => {};
    const token = subscribe(name, callback);
    expect(unsubscribe(token)).toBe(true);
  });

  test('参数是token，取消订阅失败，应该返回 false', () => {
    const name = 'say';
    const callback = () => {};
    const token = subscribe(name, callback);
    expect(unsubscribe(`${token}1`)).toBe(false);
  });

  test('publish 的同时进行 unsubscribe, 应该返回true', () => {
    const name = 'say';
    subscribe(name, () => {
      unsubscribe(name);
    });
    expect(publish(name, 'message')).toBe(true);
    expect(publish(name, 'message')).toBe(false);
  });
});
