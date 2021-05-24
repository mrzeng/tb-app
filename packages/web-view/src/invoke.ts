import { subscribe, publish, unsubscribe, subscribeOnce } from '@tb-app/pub-sub';

interface EventResult<T = any> {
  data: T;
  success: boolean;
  error?: string;
  token: string;
}

if (typeof my === 'undefined') {
  throw new Error('@tb-app/invoke only use in mini app, maybe you forget to add "https://appx/web-view.min.js"');
} else {
  my.onMessage = function onMessage(result: EventResult) {
    const { token, ...data } = result;
    publish(token, data);
  };
}

/**
 *  只能在 web-view 端调用，使用小程序端注册的功能
 * @param options
 * @returns
 */
function invoke(options: { type: string; data?: any }) {
  return new Promise((resolve, reject) => {
    const token = subscribeOnce(options.type, (name, { success, data, error }: EventResult) => {
      if (success) {
        resolve({ type: name, data });
      } else {
        try {
          reject(JSON.parse(error!));
        } catch (e) {
          reject(new Error(error));
        }
      }
    });
    my.postMessage({
      type: options.type,
      data: options.data,
      token,
    });
  });
}

/**
 *  只能在 web-view 端调用， 同一类消息可以注册多个事件回调
 * @param type
 * @param callback
 */
function listen(type: string, callback: (type: string, data: any) => void) {
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
