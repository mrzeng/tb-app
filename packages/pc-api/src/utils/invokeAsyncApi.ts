import assert from './assert';

/**
 * 调用异步API
 */
export default function invokeAsyncApi(api: string, options?: Record<string, any>): Promise<any> {
  return new Promise((resolve, reject) => {
    assert(api);
    const [firstPath, secondPath] = api.split('.');
    const invoke = secondPath ? my[firstPath][secondPath] : my[firstPath];
    invoke({
      ...(options || {}),
      success: (res: any) => resolve(res),
      fail: (err: any) => reject(err),
    });
  });
}
