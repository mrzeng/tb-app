import assert from './assert';

/**
 * 调用同步API
 */
export default function invokeSyncApi(api: string, options?: any): any {
  assert(api);
  const [firstPath, secondPath] = api.split('.');
  const invoke = secondPath ? my[firstPath][secondPath] : my[firstPath];
  return invoke(options);
}
