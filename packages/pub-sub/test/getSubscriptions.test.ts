import { getSubscriptions, subscribe, clearAllSubscriptions } from '../src/index';

describe('测试 getSubscriptions 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });
  test('当有订阅时，应该返回长度大于0 的数组', () => {
    const name = 'say';
    subscribe(name, () => {});
    subscribe(name, () => {});
    const { length } = getSubscriptions(name);
    expect(length).toBe(2);
  });

  test('当没有订阅时，应该返回空数据', () => {
    const name = 'say';
    subscribe(name, () => {});
    subscribe(name, () => {});
    const { length } = getSubscriptions('say1');
    expect(length).toBe(0);
  });
});
