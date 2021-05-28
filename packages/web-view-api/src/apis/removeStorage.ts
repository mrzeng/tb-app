import { invokeMy } from '../invoke';

/**
 * 删除缓存数据的异步接口
 */
export default function removeStorage(options: { key: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'removeStorage', data: options });
}
