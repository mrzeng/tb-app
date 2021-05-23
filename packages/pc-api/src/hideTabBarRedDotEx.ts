import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 导航菜单隐藏红点
 */
export default function hideTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('qn.hideTabBarRedDotEx', options);
}
