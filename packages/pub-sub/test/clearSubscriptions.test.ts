import { subscribe, clearSubscriptions, publish } from '../src/index';

describe('测试 clearSubscriptions 函数', () => {
  test('清除指定消息的所有回调', () => {
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

    clearSubscriptions(name1);

    expect(publish(name1, 'message')).toBe(false);
    expect(fn1).not.toBeCalled();
    expect(fn2).not.toBeCalled();
    expect(publish(name2, 'message')).toBe(true);
    expect(fn3).toBeCalled();
    expect(fn4).toBeCalled();
  });
});
