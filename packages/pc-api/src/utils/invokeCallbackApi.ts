import assert from './assert';

/**
 * 调用回调形式的API
 */
export default function invokeCallbackApi(api: string, callback: (...res: any[]) => void): any {
  assert(api);
  const [firstPath, secondPath] = api.split('.');
  const invoke = secondPath ? my[firstPath][secondPath] : my[firstPath];
  return invoke(callback);
}
