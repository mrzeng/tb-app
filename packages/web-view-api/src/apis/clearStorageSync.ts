import { invokeMy } from '../invoke';

/**
 * 清除本地数据缓存的同步接口
 */
export default function clearStorageSync(): Promise<{ success: boolean }> {
  return invokeMy({ type: 'clearStorageSync' });
}
