import { invokeMy } from '../invoke';

/**
 * 隐藏 tabBar 某一项的右上角的红点
 */
export default function hideTabBarRedDot(options: { index: number }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'hideTabBarRedDot', data: options });
}
