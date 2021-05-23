import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 开始网络状态变化的监听
 */
export default function onNetworkStatusChange(callback: () => void): void {
  return invokeCallbackApi('onNetworkStatusChange', callback);
}
