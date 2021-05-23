import { subscribe, clearAllSubscriptions, publish } from '../src/index';

describe('测试 clearAllSubscriptions 函数', () => {
  test('清除所有订阅消息的回调', () => {
    const name1 = 'say1';
    const name2 = 'say2';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();
    const fn4 = jest.fn();

    subscribe(name1, fn1);
    subscribe(name1, fn2);
    subscribe(name2, fn3);
    subscribe(name2, fn4);

    clearAllSubscriptions();

    expect(publish(name1, 'message')).toBe(false);
    expect(fn1).not.toBeCalled();
    expect(fn2).not.toBeCalled();
    expect(publish(name2, 'message')).toBe(false);
    expect(fn3).not.toBeCalled();
    expect(fn4).not.toBeCalled();
  });
});
