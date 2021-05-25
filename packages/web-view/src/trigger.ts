import { subscribe, publish } from '@tb-app/pub-sub';
import * as api from '@tb-app/pc-api';
import { Message, Result } from './type';
import prefix from './utils/prefix';

type Callback = (data: any) => void;

type Data = {
  data: any;
  webViewId: string;
  token: string;
};

const webViewContextCache: Record<string, any> = {};

const postMessage = (result: Result, webViewId: string) => {
  let webViewContext = webViewContextCache[webViewId];
  if (!webViewContext) {
    webViewContext = my.createWebViewContext(webViewId);
    if (!webViewContext) {
      throw new Error(`id 为 ${webViewId} 的webview组件不存在`);
    }
    webViewContextCache[webViewId] = webViewContext;
  }
  webViewContext.postMessage(result);
};

/**
 * 注册消息，只能在小程序端视频
 * @param type 消息名称
 * @param callback 回调
 * @returns
 */
const registry = (type: string, callback: Callback) => {
  subscribe(type, (data: Data) => {
    const { token, webViewId } = data;
    Promise.resolve()
      .then(() => {
        return callback(data.data);
      })
      .then((res) => postMessage({ data: res, success: true, token, type }, webViewId))
      .catch((e) => {
        postMessage(
          {
            error: e ? e.message || e.toString() : `${type} 调用出错`,
            success: false,
            token,
            type,
          },
          webViewId
        );
      });
  });
};

/**
 * 自动注册所有小程序api(不包含事件监听和获取上下文之类API)
 */
function autoRegistry() {
  Object.keys(api).forEach((key) => {
    // 只注册不带on前缀的api
    if (key.indexOf('on') !== 0) {
      // @ts-ignore
      registry(`${prefix}${key}`, api[key]);
    }
  });
}

/**
 * 触发注册的消息, 只能在小程序端的web-view组件的 onMessage 处理函数上使用
 * @param param 传给消息回调的数据
 * @param webViewId web-view的id
 */
const trigger = (param: Message, webViewId: string) => {
  const { type, data, token } = param;
  publish<Data>(type, {
    data,
    webViewId,
    token,
  });
};

export { registry, trigger, autoRegistry };
