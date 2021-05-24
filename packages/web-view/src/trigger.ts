import { subscribe, publish, unsubscribe } from '@tb-app/pub-sub';

type Callback = (data: any) => void;

type Value = {
  data: any;
  webViewId: string;
  token: string;
};

const webViewContextCache: Record<string, any> = {};

const postMessage = (param: { result: any; webViewId: string; token: string }) => {
  const { webViewId, result, token } = param;
  if (webViewId) {
    let webViewContext = webViewContextCache[webViewId];
    if (!webViewContext) {
      webViewContext = my.createWebViewContext(webViewId);
      webViewContextCache[webViewId] = webViewContext;
    }
    webViewContext.postMessage(
      webViewContext
        ? result
        : {
            error: `id 为 ${webViewId} 的webview组件不存在`,
            success: false,
            token,
          }
    );
  }
};

const handleError = (type: string, e: Error) => {
  if (!e) {
    return {
      error: `${type} 调用出错`,
      success: false,
    };
  }
  return {
    error: e.message || e.toString(),
    success: false,
  };
};

/**
 * 注册消息，只能在小程序端视频
 * @param type 消息名称
 * @param callback 回调
 * @returns
 */
const registry = (type: string, callback: Callback) => {
  subscribe(type, (name: string, result: Value) => {
    const { data, webViewId, token } = result;
    Promise.resolve()
      .then(() => {
        return callback(data);
      })
      .then((res) => ({
        data: res,
        success: true,
      }))
      .catch((e) => handleError(type, e))
      .then((res) => postMessage({ result: res, webViewId, token }));
  });
};

/**
 * 触发注册的消息, 只能在小程序端的web-view组件的 onMessage 处理函数上使用
 * @param param 传给消息回调的数据
 * @param webViewId web-view的id
 */
const trigger = (param: { type: string; data?: any; token: string }, webViewId: string) => {
  const { type, data, token } = param;
  const value: Value = {
    data,
    webViewId,
    token,
  };
  publish(type, value);
};

export { registry, trigger };
