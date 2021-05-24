import { registry, clearAllSubscriptions } from '../src/index';

describe('测试 registry 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });

  test('测试 registry 的第一个参数必须是字符串', () => {
    [null, undefined, false, 1, new Date(), function test() {}, {}, [], /test/].forEach((value) => {
      // @ts-ignore
      expect(() => registry(value, () => {})).toThrow(/^Expected the name to be a string ,Instead, received:/);
    });
    expect(() => registry('say', () => {})).not.toThrow();
  });
});
