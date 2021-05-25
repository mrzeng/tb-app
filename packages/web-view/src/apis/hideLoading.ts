import wrapInvoke from '../utils/invoke';

/**
 * 隐藏加载提示
 */
export default function hideLoading(options?: { page?: unknown }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'hideLoading', data: options });
}
