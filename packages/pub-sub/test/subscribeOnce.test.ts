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
});
