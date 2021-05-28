import { invokeMy } from '../invoke';

/**
 * 移除 tabBar 某一项右上角的文本
 */
export default function removeTabBarBadge(options: { index: number }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'removeTabBarBadge', data: options });
}
