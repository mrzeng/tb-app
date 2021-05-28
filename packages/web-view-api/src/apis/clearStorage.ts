import { invokeMy } from '../invoke';

/**
 * 清除本地数据缓存的异步接口
 */
export default function clearStorage(): Promise<{ success: boolean }> {
  return invokeMy({ type: 'clearStorage' });
}
