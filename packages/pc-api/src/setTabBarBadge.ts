import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 为 tabBar 某一项的右上角添加文本
 */
export default function setTabBarBadge(options: { index: number; text?: string }): Promise<{ success: boolean }> {
  return invokeAsyncApi('setTabBarBadge', options);
}
