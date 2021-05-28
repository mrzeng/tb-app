import wrapInvoke from '../utils/invoke';

/**
 * 导航菜单移除提醒文字
 */
export default function removeTabBarBadgeEx(options: { id: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.removeTabBarBadgeEx', data: options });
}
