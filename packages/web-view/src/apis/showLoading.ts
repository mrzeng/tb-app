import wrapInvoke from '../utils/invoke';

/**
 * 显示加载提示的过渡效果
 */
export default function showLoading(options?: { content?: string; delay?: number; mask?: boolean }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'showLoading', data: options });
}
