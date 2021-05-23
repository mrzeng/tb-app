import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 取消网络状态变化的监听
 */
export default function offNetworkStatusChange(callback: () => void): void {
  return invokeCallbackApi('offNetworkStatusChange', callback);
}
