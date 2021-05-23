import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 监听小程序切后台事件
 */
export default function onAppHide(callback: () => void) {
  return invokeCallbackApi('onAppHide', callback);
}
