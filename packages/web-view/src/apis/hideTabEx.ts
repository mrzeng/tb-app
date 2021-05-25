import wrapInvoke from '../utils/invoke';

/**
 * 隐藏左侧导航栏中指定的菜单项
 */
export default function hideTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return wrapInvoke({ type: 'hideTabEx', data: options });
}
