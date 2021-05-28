import { invokeMy } from '../invoke';

/**
 * 为 tabBar 某一项的右上角添加文本
 */
export default function setTabBarBadge(options: { index: number; text?: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'setTabBarBadge', data: options });
}
