import { subscribe, publish, unsubscribe, subscribeOnce } from '@tb-app/pub-sub';
import { Message, Result } from './type';

type Data = Pick<Result, 'data' | 'success' | 'error'>;

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
function invoke<T = any>(options: { type: string; data?: T }) {
  return new Promise((resolve, reject) => {
    const token = subscribeOnce(options.type, ({ success, data, error }: Data) => {
      if (success) {
        resolve(data);
      } else {
        try {
          reject(JSON.parse(error!));
        } catch (e) {
          reject(new Error(error));
        }
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

export { invoke, listen, removeListen };
