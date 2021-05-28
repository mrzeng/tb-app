import { subscribe, publish } from '@tb-app/pub-sub';
import cloud from '@tbmp/mp-cloud-sdk';
import { Message, Result, Callback, Data } from './type';

const prefix = 'registry-trigger-';

const postMessage = (result: Result, webViewContext: any) => {
  webViewContext.postMessage(result);
};

/**
 * 注册消息，只能在小程序端使用
 * @param type 消息名称
 * @param callback 回调
 * @returns
 */
const registry = (type: string, callback: Callback) => {
  subscribe(type, (data: Data) => {
    const { token, webViewContext } = data;
    Promise.resolve()
      .then(() => {
        return callback(data.data);
      })
      .then((res) => postMessage({ data: res, success: true, token, type }, webViewContext))
      .catch((e) => {
        let error = e;
        if (typeof e !== 'object') {
          error = {
            message: e,
          };
        } else {
          const keys = Object.getOwnPropertyNames(e || {});
          error = keys.reduce((prev, key) => {
            return { ...prev, [key]: e[key] };
          }, {} as any);
        }
        postMessage(
          {
            error,
            success: false,
            token,
            type,
          },
          webViewContext
        );
      });
  });
};

/**
 * 注册 my
 */
registry(`${prefix}my`, ({ api, options }: { api: string; options: any }) => {
  if (typeof api !== 'string') {
    throw new Error('api必须是字符串');
  }
  if (!my.canIUse(api)) {
    throw new Error(`当前千牛版本过低，不支持my.${api}，请立即升级千牛到最新版本`);
  }
  const [key1, key2] = api.split('.');
  const method = key2 ? my[key1][key2] : my[key1];

  if (typeof method === 'function') {
    const isSyncApi = api.indexOf('Sync') + 4 === api.length || api === 'canIUse';
    if (isSyncApi) {
      return method(options);
    }
    return new Promise((resolve, reject) => {
      method({
        ...(options || {}),
        success: (res: any) => resolve(res),
        fail: (err: any) => reject(err),
      });
    });
  }
  return method;
});
/**
 * 注册 httpRequest
 */
registry(
  `${prefix}httpRequest`,
  function httpRequest(options: { path: string; body?: any; headers?: any; method?: string; exts?: Record<string, any> }) {
    if (my.isIDE) {
      const { path, headers, method, body, exts } = options;
      return my.httpRequest({
        url: path,
        headers,
        method,
        data: body,
        timeout: exts ? exts.timeout : undefined,
      });
    }
    return cloud.application.httpRequest(options);
  }
);

/**
 * 注册 cloud
 */
registry(`${prefix}cloud`, ({ api, options }) => {
  if (typeof api !== 'string') {
    throw new Error('api必须是字符串');
  }
  const [key1, key2] = api.split('.');
  // @ts-ignore
  if (typeof cloud[key1] === 'undefined' || typeof cloud[key1][key2] === 'undefined') {
    throw new Error(`api:'${api}'不存在`);
  }
  // @ts-ignore
  return key2 ? cloud[key1][key2](options) : cloud[key1](options);
});

/**
 * 触发注册的消息, 只能在小程序端的web-view组件的 onMessage 处理函数上使用
 * @param param 传给消息回调的数据
 * @param webViewContext web-view的id
 */
const trigger = (param: Message, webViewContext: any) => {
  const { type, data, token } = param;
  publish<Data>(type, {
    data,
    webViewContext,
    token,
  });
};

export { registry, trigger };
