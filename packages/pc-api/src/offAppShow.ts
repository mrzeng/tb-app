import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 取消监听小程序切前台事件
 */
export default function offAppShow(callback: () => void) {
  return invokeCallbackApi('offAppShow', callback);
}
