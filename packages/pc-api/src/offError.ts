import invokeCallbackApi from './utils/invokeCallbackApi';
/**
 * 取消监听小程序错误事件
 */
export default function offError(callback: (error: string) => void) {
  return invokeCallbackApi('offError', callback);
}
