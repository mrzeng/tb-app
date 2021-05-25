import wrapInvoke from '../utils/invoke';

/**
 * 隐藏 tabBar
 */
export default function hideTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'hideTabBar', data: options });
}
