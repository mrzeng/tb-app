import invokeSyncApi from './utils/invokeSyncApi';

/**
 * 同步将数据存储在本地缓存中指定的 key 中的同步接口
 */
export default function setStorageSync(options: { key: string; data: unknown }): { success: boolean } {
  return invokeSyncApi('setStorageSync', options);
}
