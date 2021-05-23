import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 导航菜单显示红点
 */
export default function showTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.showTabBarRedDotEx', options);
}
