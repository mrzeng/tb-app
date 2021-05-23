import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 监听小程序错误事件
 */
export default function onError(callback: (error: string) => void) {
  return invokeCallbackApi('onError', callback);
}
