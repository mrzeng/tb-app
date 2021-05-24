import { publish, subscribeOnce } from '../src/index';

describe('测试 subscribeOnce 函数', () => {
  test('订阅的消息的回调，只会被调用一次', () => {
    const name = 'say';
    const fn = jest.fn();
    subscribeOnce(name, fn);
    expect(publish(name, 'message')).toBe(true);
    expect(publish(name, 'message')).toBe(false);
    expect(fn).toBeCalledTimes(1);
  });

  test('使用 token 触发订阅的消息，回调只会被调用一次, 但不能影响其他token', () => {
    const name = 'say';
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const token1 = subscribeOnce(name, fn1);
    const token2 = subscribeOnce(name, fn2);
    expect(publish(token1, 'message')).toBe(true);
    expect(fn1).toBeCalledTimes(1);
    expect(fn2).toBeCalledTimes(0);
    expect(publish(token2, 'message')).toBe(true);
    expect(fn2).toBeCalledTimes(1);
  });
});
