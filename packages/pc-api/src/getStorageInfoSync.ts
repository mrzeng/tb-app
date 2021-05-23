import invokeSyncApi from './utils/invokeSyncApi';
/**
 * 获取当前 storage 相关信息的同步接口
 */
export default function getStorageInfoSync(): { keys: string[]; currentSize: number; limitSize: number } {
  return invokeSyncApi('getStorageInfoSync');
}
