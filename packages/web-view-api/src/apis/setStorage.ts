import { invokeMy } from '../invoke';

/**
 * 将数据存储在本地缓存中指定的 key 中的异步接口
 */
export default function setStorage(options: { key: string; data: unknown }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'setStorage', data: options });
}
