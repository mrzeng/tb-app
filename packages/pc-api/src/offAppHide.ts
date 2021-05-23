import invokeCallbackApi from './utils/invokeCallbackApi';
/**
 * 取消监听小程序切后台事件
 */
export default function offAppHide(callback: () => void) {
  return invokeCallbackApi('offAppHide', callback);
}
