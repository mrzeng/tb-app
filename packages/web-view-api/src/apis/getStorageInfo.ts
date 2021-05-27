import wrapInvoke from '../utils/invoke';

/**
 * 获取当前 storage 的相关信息的异步接口
 */
export default function getStorageInfo(): Promise<{ keys: string[]; currentSize: number; limitSize: number }> {
  return wrapInvoke({ type: 'getStorageInfo' });
}
