import wrapInvoke from '../utils/invoke';

/**
 * 导航菜单隐藏红点
 */
export default function hideTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'hideTabBarRedDotEx', data: options });
}
