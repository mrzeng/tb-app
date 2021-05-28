import { invokeMy } from '../invoke';

/**
 * 显示 tabBar
 */
export default function showTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'showTabBar', data: options });
}
