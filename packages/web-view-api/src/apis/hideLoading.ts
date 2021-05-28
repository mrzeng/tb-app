import { invokeMy } from '../invoke';

/**
 * 隐藏加载提示
 */
export default function hideLoading(options?: { page?: unknown }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'hideLoading', data: options });
}
