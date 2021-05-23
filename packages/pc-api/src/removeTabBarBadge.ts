import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 移除 tabBar 某一项右上角的文本
 */
export default function removeTabBarBadge(options: { index: number }): Promise<{ success: boolean }> {
  return invokeAsyncApi('removeTabBarBadge', options);
}
