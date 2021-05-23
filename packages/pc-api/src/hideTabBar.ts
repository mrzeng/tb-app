import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 隐藏 tabBar
 */
export default function hideTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return invokeAsyncApi('hideTabBar', options);
}
