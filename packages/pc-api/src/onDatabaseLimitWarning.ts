import invokeCallbackApi from './utils/invokeCallbackApi';

/**
 * 当数据库大小超过警告值（PC 端默认 100MB）的时候，触发此事件。
 */
export default function onDatabaseLimitWarning(callback: (res: any) => void): void {
  return invokeCallbackApi('qn.onDatabaseLimitWarning', callback);
}
