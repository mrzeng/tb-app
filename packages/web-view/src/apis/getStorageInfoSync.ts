import wrapInvoke from '../utils/invoke';
/**
 * 获取当前 storage 相关信息的同步接口
 */
export default function getStorageInfoSync(): Promise<{ keys: string[]; currentSize: number; limitSize: number }> {
  return wrapInvoke({ type: 'getStorageInfoSync' });
}
