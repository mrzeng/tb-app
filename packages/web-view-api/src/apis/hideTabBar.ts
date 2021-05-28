import { invokeMy } from '../invoke';

/**
 * 隐藏 tabBar
 */
export default function hideTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'hideTabBar', data: options });
}
