import { invokeMy } from '../invoke';

/**
 * 导航菜单移除提醒文字
 */
export default function removeTabBarBadgeEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeMy({ type: 'qn.removeTabBarBadgeEx', data: options });
}
