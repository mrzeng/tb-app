import wrapInvoke from '../utils/invoke';

/**
 * 显示 tabBar
 */
export default function showTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'showTabBar', data: options });
}
