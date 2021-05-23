import invokeSyncApi from './utils/invokeSyncApi';
/**
 * 获取缓存数据的同步接口
 */
export default function getStorageSync<T = unknown>(options: { key: string }): { data: T } {
  return invokeSyncApi('getStorageSync', options);
}
