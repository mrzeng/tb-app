import { invokeMy } from '../invoke';

/**
 * 同步将数据存储在本地缓存中指定的 key 中的同步接口
 */
export default function setStorageSync(options: { key: string; data: unknown }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'setStorageSync', data: options });
}
