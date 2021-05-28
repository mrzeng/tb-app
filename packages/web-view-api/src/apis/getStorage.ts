import { invokeMy } from '../invoke';

/**
 * 获取缓存数据的异步接口
 */
export default function getStorage<T = unknown>(options: { key: string }): Promise<{ data: T }> {
  return invokeMy({ type: 'getStorage', data: options });
}
