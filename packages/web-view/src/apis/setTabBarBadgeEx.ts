import wrapInvoke from '../utils/invoke';

/**
 * 导航菜单显示提醒文字
 */
export default function setTabBarBadgeEx(options: { id: string; text: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.setTabBarBadgeEx', data: options });
}
