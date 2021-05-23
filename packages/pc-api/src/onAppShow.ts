import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 监听小程序切前台事件
 */
export default function onAppShow(callback: () => void) {
  return invokeCallbackApi('onAppShow', callback);
}
