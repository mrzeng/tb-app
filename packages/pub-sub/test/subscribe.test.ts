import { subscribe, clearAllSubscriptions } from '../src/index';

const originConsole = global.console;
beforeAll(() => {
  global.console.error = () => {};
});
afterAll(() => {
  global.console = originConsole;
});

describe('测试 subscribe 函数', () => {
  beforeEach(() => {
    clearAllSubscriptions();
  });

  test('测试 subscribe 的第一个参数必须是字符串', () => {
    [null, undefined, false, 1, new Date(), function test() {}, {}, [], /test/].forEach((value) => {
      // @ts-ignore
      expect(() => subscribe(value, () => {})).toThrow(/^Expected the name to be a string ,Instead, received:/);
    });
    expect(() => subscribe('say', () => {})).not.toThrow();
  });

  test('测试 subscribe 的第二个参数必须是函数', () => {
    [null, undefined, false, 1, new Date(), 'function', {}, [], /test/].forEach((value) => {
      // @ts-ignore
      expect(() => subscribe('say', value)).toThrow(/^Expected the callback to be a function,Instead, received:/);
    });
    expect(() => subscribe('say', () => {})).not.toThrow();
  });

  test('subscribe 应该返回一个字符串token', () => {
    const token = subscribe('say', () => {});
    expect(typeof token).toBe('string');
  });

  test('使用同一个 name 和 callback,多次调用subscribe ,应该返回不同的token', () => {
    const times = 5;
    const name = 'say';
    const callback = () => {};
    const result = new Set();
    for (let i = 0; i < times; i += 1) {
      result.add(subscribe(name, callback));
    }
    expect(result.size).toBe(times);
  });

  test('使用同一个 name 和不同 callback,多次调用subscribe ,应该返回不同的token', () => {
    const times = 5;
    const name = 'say';
    const result = new Set();
    for (let i = 0; i < times; i += 1) {
      result.add(subscribe(name, () => {}));
    }
    expect(result.size).toBe(times);
  });

  test('使用不同 name 和相同 callback,多次调用subscribe ,应该返回不同的token', () => {
    const names = ['say', 'say1', 'say2'];
    const result = new Set();
    const callback = () => {};
    for (let i = 0; i < names.length; i += 1) {
      result.add(subscribe(names[i], callback));
    }
    expect(result.size).toBe(names.length);
  });

  test('使用不同 name 和不同 callback,多次调用subscribe ,应该返回不同的token', () => {
    const names = ['say', 'say1', 'say2'];
    const result = new Set();
    for (let i = 0; i < names.length; i += 1) {
      result.add(subscribe(names[i], () => {}));
    }
    expect(result.size).toBe(names.length);
  });

  test('禁止使用token作为消息的名称', () => {
    const token = subscribe('say', () => {});
    expect(() => subscribe(token, () => {})).toThrow();
  });
});
