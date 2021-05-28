import { invokeMy } from '../invoke';

/**
 * 导航菜单隐藏红点
 */
export default function hideTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.hideTabBarRedDotEx', data: options });
}
