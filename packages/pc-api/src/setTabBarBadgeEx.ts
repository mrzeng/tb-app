import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 导航菜单显示提醒文字
 */
export default function setTabBarBadgeEx(options: { id: string; text: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.setTabBarBadgeEx', options);
}
