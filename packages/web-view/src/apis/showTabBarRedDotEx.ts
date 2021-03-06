import wrapInvoke from '../utils/invoke';

/**
 * 导航菜单显示红点
 */
export default function showTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'qn.showTabBarRedDotEx', data: options });
}
