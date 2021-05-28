import { subscribe, publish, unsubscribe, subscribeOnce } from '@tb-app/pub-sub';
import { Message, Result, Data } from './type';

const prefix = 'registry-trigger-';

if (typeof my !== 'undefined') {
  my.onMessage = function onMessage(result: Result) {
    const { token, type, ...data } = result;
    publish<Data>(token || type, data);
  };
}

/**
 *  只能在 web-view 端调用，使用小程序端注册的功能
 * @param options
 * @returns
 */
function invoke<T = any>(options: { type: string; data?: any }): Promise<T> {
  return new Promise((resolve, reject) => {
    const token = subscribeOnce(options.type, ({ success, data, error }: Data) => {
      if (success) {
        resolve(data);
      } else {
        reject(error);
      }
    });
    const message: Message = {
      type: options.type,
      data: options.data,
      token,
    };
    my.postMessage(message);
  });
}

/**
 * 调用小程序my上的api, 不支持监听和创建上下文之类的api
 * @param data
 * @returns
 */
function invokeMy({ type, data }: { type: string; data?: any }) {
  return invoke({
    type: `${prefix}my`,
    data: {
      api: type,
      options: data,
    },
  });
}

/**
 * 调用小程序cloud上的api
 * @param data
 * @returns
 */
function invokeCloud({ type, data }: { type: string; data?: any }) {
  return invoke({
    type: `${prefix}cloud`,
    data: {
      api: type,
      options: data,
    },
  });
}

/**
 *  只能在 web-view 端调用， 同一类消息可以注册多个事件回调
 * @param type
 * @param callback
 */
function listen(type: string, callback: (data?: any) => void) {
  subscribe(type, callback);
}

/**
 *  只能在 web-view 端调用，用于移除对应的事件监听
 * @param type
 */
function removeListen(type: string) {
  unsubscribe(type);
}

export { invoke, listen, removeListen, invokeMy, invokeCloud };
