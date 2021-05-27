import wrapInvoke from '../utils/invoke';

/**
 * 删除缓存数据的异步接口
 */
export default function removeStorage(options: { key: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'removeStorage', data: options });
}
