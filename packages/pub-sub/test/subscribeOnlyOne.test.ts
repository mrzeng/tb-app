import { subscribeOnlyOne } from '../src/index';

const originConsole = global.console;
beforeAll(() => {
  global.console.error = () => {};
});
afterAll(() => {
  global.console = originConsole;
});

describe('测试 subscribeOnlyOne 函数', () => {
  test('同一个消息名称，只能注册一个回调', () => {
    const name = 'say';
    subscribeOnlyOne(name, () => {});
    expect(() => subscribeOnlyOne(name, () => {})).toThrow(/is subscribed$/);
  });
});
