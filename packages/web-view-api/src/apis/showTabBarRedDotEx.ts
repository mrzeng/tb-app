import { invokeMy } from '../invoke';

/**
 * 导航菜单显示红点
 */
export default function showTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.showTabBarRedDotEx', data: options });
}
