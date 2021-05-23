import invokeAsyncApi from '../src/utils/invokeAsyncApi';
import invokeCallbackApi from '../src/utils/invokeCallbackApi';
import invokeSyncApi from '../src/utils/invokeSyncApi';

let callbacks: Array<() => void> = [];

const resetCallbacks = () => {
  callbacks = [];
};

// mock 全局的my
global.my = {
  getStorage(options: { success: (...res: any[]) => void }) {
    Promise.resolve().then(() => options.success('hello'));
  },
  getStorageSync() {
    return 'hello';
  },
  onAppShow(callback: () => void) {
    callbacks.push(callback);
  },
  qn: {
    chooseFile(options: { success: (...res: any[]) => void }) {
      Promise.resolve().then(() => options.success('link'));
    },
    onDatabaseLimitWarning(callback: () => void) {
      callbacks.push(callback);
    },
    getStorageInfoSync() {
      return 'hello';
    },
  },
  canIUse(api: string) {
    const [firstPath, secondPath] = api.split('.');
    if (secondPath) {
      return !!(my[firstPath] && my[firstPath][secondPath]);
    }
    return !!my[firstPath];
  },
};

describe('测试 invokeAsyncApi 函数', () => {
  test('api 不存在', async () => {
    await expect(invokeAsyncApi('chooseFile')).rejects.toThrow();
    await expect(invokeAsyncApi('qn.getStorage')).rejects.toThrow();
  });

  test('getStorage  api 存在', async () => {
    await expect(invokeAsyncApi('getStorage')).resolves.toEqual('hello');
  });

  test('qn.chooseFile api 存在', async () => {
    await expect(invokeAsyncApi('qn.chooseFile')).resolves.toEqual('link');
  });
});

describe('测试 invokeCallbackApi 函数', () => {
  afterEach(resetCallbacks);
  test('callback api 不存在', () => {
    expect(() => invokeCallbackApi('onDatabaseLimitWarning', () => {})).toThrow();
    expect(() => invokeCallbackApi('qn.onAppShow', () => {})).toThrow();
  });

  test('onAppShow api 存在', async () => {
    const callback = jest.fn();
    invokeCallbackApi('onAppShow', callback);
    await Promise.resolve();
    callbacks.forEach((c) => c());
    expect(callback).toBeCalled();
  });

  test('onDatabaseLimitWarning api 存在', async () => {
    const callback = jest.fn();
    invokeCallbackApi('qn.onDatabaseLimitWarning', callback);
    await Promise.resolve();
    callbacks.forEach((c) => c());
    expect(callback).toBeCalled();
  });
});

describe('测试 invokeSyncApi 函数', () => {
  test('sync 不存在', () => {
    expect(() => invokeSyncApi('getStorageInfoSync')).toThrow();
    expect(() => invokeSyncApi('qn.getStorageSync')).toThrow();
  });

  test('getStorageSync  api 存在', () => {
    expect(invokeSyncApi('getStorageSync')).toEqual('hello');
  });

  test('getStorageInfoSync  api 存在', () => {
    expect(invokeSyncApi('qn.getStorageInfoSync')).toEqual('hello');
  });
});
