import invokeAsyncApi from './utils/invokeAsyncApi';

/**
 * 显示 tabBar
 */
export default function showTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return invokeAsyncApi('showTabBar', options);
}
