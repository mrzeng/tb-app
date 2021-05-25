import wrapInvoke from '../utils/invoke';
/**
 * 获取缓存数据的同步接口
 */
export default function getStorageSync<T = unknown>(options: { key: string }): Promise<{ data: T }> {
  return wrapInvoke({ type: 'getStorageSync', data: options });
}
