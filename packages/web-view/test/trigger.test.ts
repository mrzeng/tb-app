import { registry, clearAllSubscriptions, trigger } from '../src/index';

describe('测试 trigger 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });

  test('执行 trigger 后, 数据应该作为第一个参数传给注册的回调', () => {
    const message = 'message';
    return new Promise((resolve) => {
      const fn = jest.fn().mockImplementation((data) => {
        expect(data).toBe(message);
        resolve(data);
      });
      const type = 'post';
      registry(type, fn);
      trigger(
        {
          type,
          data: message,
          token: 'token',
        },
        'webViewId'
      );
    });
  });
});
