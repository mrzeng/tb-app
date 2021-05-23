import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 清除本地数据缓存的异步接口
 */
export default function clearStorage(): Promise<{ success: boolean }> {
  return invokeAsyncApi('clearStorage');
}
