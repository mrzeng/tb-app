import invokeSyncApi from './utils/invokeSyncApi';

/**
 * 清除本地数据缓存的同步接口
 */
export default function clearStorageSync(): { success: boolean } {
  return invokeSyncApi('clearStorageSync');
}
